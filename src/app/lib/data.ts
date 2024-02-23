
'use server';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { Treks, TreksFiltered, Users_, User } from './definitions';
import { revalidatePath } from 'next/cache';

const ITEMS_PER_PAGE = 8;


export async function fetchTreks(query: string) {
    noStore();

    try {
        console.log("Fetching products data");

        const data = await sql<Treks>`SELECT * FROM routes;`;
        console.log('Data fetch completed. (Routes)');

        return data.rows;

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch routes data.');
    }
};



export async function fetchFilteredTreks(
    query: string,
    currentPage: number) {
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const filteredTreks = await sql<TreksFiltered>`
        SELECT
            routes.id,
            routes.name,
            routes.difficunty,
            routes.country,
            routes.distance,
            routes.description,
            routes.image_url,
            users_.fname,
            users_.lname,
            users_.email
        FROM routes
        JOIN users_ ON routes.created_by = users_.id
        WHERE 
            routes.name ILIKE ${`%${query}%`} OR
            routes.difficunty ILIKE ${`%${query}%`} OR
            routes.country ILIKE ${`%${query}%`} OR
            users_.fname ILIKE ${`%${query}%`} OR
            users_.lname ILIKE ${`%${query}%`} OR
            users_.email ILIKE ${`%${query}%`}
        ORDER BY routes.name DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};
        `;

        const treks = filteredTreks.rows;
        return treks;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch filtered treks.');
    }

}



export async function fetchTreksPages(query: string) {
    noStore();
    try {
        const count = await sql`SELECT COUNT(*)
    FROM routes
    JOIN users_ ON routes.created_by = users_.id
    WHERE
        routes.name ILIKE ${`%${query}%`} OR
        routes.difficunty ILIKE ${`%${query}%`} OR
        routes.country ILIKE ${`%${query}%`} OR
        users_.fname ILIKE ${`%${query}%`} OR
        users_.lname ILIKE ${`%${query}%`} OR
        users_.email ILIKE ${`%${query}%`}
  `;


        const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of Treks.');
    }
}





export async function fetchTrekById(id: string) {
    noStore();
    try {
        const data = await sql<Treks>`
        SELECT
            routes.id,
            routes.name,
            routes.difficunty,
            routes.country,
            routes.description,
            routes.distance,
            routes.image_url,
            routes.created_at,
            users_.fname,
            users_.lname,
            users_.email
        FROM routes
        JOIN users_ ON routes.created_by = users_.id
        WHERE routes.id = ${id}`;

        console.log('Data fetch completed.');

        return data.rows;

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch trek data.');
    }
}


//MAYBE COULD BE EASY to filter the difficulty If I decide to create
// 3 functions specifically: Easy, Moderate, etc.. rathen tha 
//passing arguments


export async function fetchTreksByDifficulty(
    query: string,
    currentPage: number,
) {
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const filteredTreks = await sql<TreksFiltered>`
       SELECT
            routes.id,
            routes.name,
            routes.difficunty,
            routes.country,
            routes.distance,
            routes.description,
            routes.image_url,
            users_.fname,
            users_.lname,
            users_.email
        FROM routes
        JOIN users_ ON routes.created_by = users_.id
        WHERE
            routes.difficunty ILIKE ${`%${query}%`}
        ORDER BY routes.name DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};
        
    `;
        const treks = filteredTreks.rows;
        return treks;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch items by category.');
    }
}



export async function fetchTreksByCountry(
    query: string,
    currentPage: number,
) {
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const filteredTreks = await sql<TreksFiltered>`
       SELECT
            routes.id,
            routes.name,
            routes.difficunty,
            routes.country,
            routes.distance,
            routes.description,
            routes.image_url,
            users_.fname,
            users_.lname,
            users_.email
        FROM routes
        JOIN users_ ON routes.created_by = users_.id
        WHERE
            routes.country ILIKE ${`%${query}%`}
        ORDER BY routes.name DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};
        
    `;
        const treks = filteredTreks.rows;
        return treks;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch items by category.');
    }
}




export async function fetchTreksByBigDistance(
    query: string,
    currentPage: number,
) {
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const filteredTreks = await sql<TreksFiltered>`
       SELECT
            routes.id,
            routes.name,
            routes.difficunty,
            routes.country,
            routes.distance,
            routes.description,
            routes.image_url,
            users_.fname,
            users_.lname,
            users_.email
        FROM routes
        JOIN users_ ON routes.created_by = users_.id
        WHERE
            routes.distance >= 15
        ORDER BY routes.name DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};
        
    `;
        const treks = filteredTreks.rows;
        return treks;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch items by category.');
    }
}




export async function fetchTreksByLowDistance(
    query: string,
    currentPage: number,
) {
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const filteredTreks = await sql<TreksFiltered>`
       SELECT
            routes.id,
            routes.name,
            routes.difficunty,
            routes.country,
            routes.distance,
            routes.description,
            routes.image_url,
            users_.fname,
            users_.lname,
            users_.email
        FROM routes
        JOIN users_ ON routes.created_by = users_.id
        WHERE
            routes.distance <= 15
        ORDER BY routes.name DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};
        
    `;
        const treks = filteredTreks.rows;
        return treks;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch items by category.');
    }
}



//USERS




export async function fetchUsers(
    query: string,
    currentPage: number) {
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const filteredUsers = await sql<Users_>`
        SELECT
            id,
            googleId,
            email,
            role,
            fname,
            lname,
            image_url,
            phone,
            description
        FROM users_
        WHERE
            fname ILIKE ${`%${query}%`} OR
            lname ILIKE ${`%${query}%`} OR
            email ILIKE ${`%${query}%`}
        ORDER BY lname DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};
        `;

        const users = filteredUsers.rows;
        return users;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch filtered users.');
    }

}

export async function fetchUserById(id: string) {
    noStore();

    try {

        const data = await sql<Treks>`
        SELECT
            id,
            googleId,
            email,
            role,
            fname,
            lname,
            image_url,
            phone,
            description,
        FROM users_
        WHERE id = ${id}`;

        console.log(`Data fetch completed. ${data.rows}`);

        return data.rows;

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}


//TREKS FOR MY TREKS
export async function fetchTreksByUser(
    query: string,
    id: string,
    currentPage: number,
) {
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const filteredTreks = await sql<TreksFiltered>`
       SELECT
            routes.id,
            routes.name,
            routes.difficunty,
            routes.country,
            routes.distance,
            routes.description,
            routes.image_url,
            users_.fname,
            users_.lname,
            users_.email
        FROM routes
        JOIN users_ ON routes.created_by = users_.id
        WHERE
            routes.created_by = ${id} AND 
            (routes.name ILIKE ${`%${query}%`} OR
            routes.difficunty ILIKE ${`%${query}%`} OR
            routes.country ILIKE ${`%${query}%`})
        ORDER BY routes.name DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};
        
    `;
        const treks = filteredTreks.rows;
        return treks;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch treks by user id.' + error);
    }
}



export async function fetchUsersPages(query: string) {
    noStore();
    try {
        const count = await sql`SELECT COUNT(*)
    FROM users_
    WHERE
        users_.fname ILIKE ${`%${query}%`} OR
        users_.lname ILIKE ${`%${query}%`} OR
        users_.email ILIKE ${`%${query}%`}
  `;


        const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of Treks.');
    }
}


export async function getUser(email: string) {

    try {
        const user = await sql`SELECT * FROM users WHERE email=${email}`;
        return user.rows[0] as User;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}



export async function fetchTreksPagesbyUser(query: string, id: string) {
    noStore();
    try {
        const count = await sql`SELECT COUNT(*)
    FROM routes
    JOIN users_ ON routes.created_by = users_.id
    WHERE
        users_.id = ${id} AND (
        routes.name ILIKE ${`%${query}%`} OR
        routes.difficunty ILIKE ${`%${query}%`} OR
        routes.country ILIKE ${`%${query}%`} OR
        routes.distance ILIKE ${`%${query}%`})
  `;


        const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of Treks.');
    }
}






// DELETE TREK

export async function deleteTrek(id: string) {
    try {
        await sql`DELETE FROM routes WHERE id = ${id}`;
        revalidatePath('/home/dashboard/myTreks');
        return { message: 'Deleted Trek.' };
    } catch (error) {
        return { message: 'Database Error: Failed to Delete trek.' };
    }
}



//Insert User:


const UserSchema = z.object({
    id: z.string().optional(),
    email: z.string(),
    role: z.enum(['dev', 'user']).optional(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
    fname: z.string(),
    lname: z.string(),
    image_url: z.string().optional(),
    phone: z.string().optional(),
    description: z.string().optional(),
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match"
        });
    }
});

export async function createUser(formData: FormData) {
    try {
        const { email, role, password, fname, lname, image_url, phone, description } = UserSchema.parse({
            email: formData.get('email'),
            role: formData.get('role'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirm-password'),
            fname: formData.get('fname'),
            lname: formData.get('lname'),
            image_url: formData.get('image_url'), // formData.get('image_url') puede ser null
            phone: formData.get('phone'),
            description: formData.get('description')
        });

        // Verifica si image_url es null, si lo es, asigna una cadena vacía
        const imageUrlValue = image_url || '';

        const hashedPassword = await bcrypt.hash(password, 10);
        await sql`
            INSERT INTO users_ (email, role, password, fname, lname, image_url, phone, description)
            VALUES (${email}, ${role}, ${hashedPassword}, ${fname}, ${lname}, ${imageUrlValue}, ${phone}, ${description})
        `;
        console.log("----user created----");
        // Aquí deberías redirigir al usuario a la página de inicio de sesión
        // Suponiendo que tienes una función de redirección implementada
        // redirect('/login');
    } catch (error) {
        console.log("Error", error);
    }
}
