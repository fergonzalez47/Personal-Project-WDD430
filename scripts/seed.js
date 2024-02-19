const { db } = require('@vercel/postgres');

const { users, routes } = require("./placeholder-data.js")
//FIRST, FOLLOW THE STEPS IN CHAPTER 6 OF THE TUTORIAL, AND BEFORE SEED THE DATABASE IN TE THERMINAL NEED
//TO BE TYPED : " npm i @vercel/postgres "

const bcrypt = require('bcrypt');


async function seedUserTable(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        // Crear la tabla "user" si no existe
        const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users_ (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        googleId VARCHAR(255) NULL,
        email VARCHAR(255) NOT NULL unique,
        role VARCHAR(20) NOT NULL,
        password VARCHAR(255) NOT NULL,
        fname varchar(255) NOT NULL,
        lname varchar(255) NOT NULL,
        image_url varchar(500) null,
        phone VARCHAR(20) NULL,
        description varchar(512) null
      );
    `;

        console.log('Table "user" created');

        const insertedUsers = await Promise.all(
            users.map(async (user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                return client.sql`
              INSERT INTO users_ (id, email, role, password, fname, lname, image_url, phone, description)
              VALUES (${user.id}, ${user.email}, ${user.role}, ${hashedPassword}, ${user.fname}, ${user.lname}, ${user.image_url}, ${user.phone}, ${user.description})
              ON CONFLICT (id) DO NOTHING;
            `;
            }),
        );

        console.log(`Seeded ${insertedUsers.length} users`);

        return {
            createTable,
        };
    } catch (error) {
        console.error('Error seeding "user":', error);
        throw error;
    }
}

async function seedRouteTable(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS routes (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                difficunty VARCHAR(45) NOT NULL,
                country VARCHAR(60) NOT NULL,
                description VARCHAR(2000) NULL,
                distance INT NOT NULL,
                image_url VARCHAR(255) NULL,
                created_by UUID NOT NULL,
                created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
        `;

        console.log('Tabla "routes" creada');

        const insertedRoutes = await Promise.all(
            routes.map(
                (route) => client.sql`
                    INSERT INTO routes (name, difficunty, country, description, distance, image_url, created_by)
                    VALUES (${route.name}, ${route.difficunty}, ${route.country}, ${route.description}, ${route.distance}, ${route.image_url}, ${route.created_by})
                    ON CONFLICT (id) DO NOTHING;
                `
            ),
        );
        console.log(`Seeded ${insertedRoutes.length} routes`);

        return {
            createTable
        };
    } catch (error) {
        console.error('Error seeding "item":', error);
        throw error;
    }
}

async function seedCommentsTable(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;


        const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS comments (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        comment varchar(255) NULL,
        rate INTEGER NOT NULL,
        route_id uuid NOT NULL,
        user_id uuid NOT NULL
      );
    `;

        // console.log('Table "comments" created');
        // // Insert data into the "item" table
        // const insertedComments = await Promise.all(
        //     comments.map(
        //         (comment) => client.sql`
        //       INSERT INTO comments (id, comment, rate, item_id, user_id)
        //       VALUES (${comment.id}, ${comment.comment},${comment.rate}, ${comment.item_id}, ${comment.user_id})
        //       ON CONFLICT (id) DO NOTHING;
        //     `,
        //     ),
        // );

        // console.log(`Seeded ${insertedComments.length} comments`);

        return {
            createTable
        };
    } catch (error) {
        console.error('Error to seed table "comments":', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();

    await seedUserTable(client);
    await seedRouteTable(client);
    await seedCommentsTable(client);

    await client.end();
}

main().catch((err) => {
    console.error('Something went wrong with database creation', err);
});
