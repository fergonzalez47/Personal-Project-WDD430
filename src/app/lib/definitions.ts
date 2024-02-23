
export type TreksFiltered = {
    id: string
    name: string
    difficunty: string
    country: string
    distance: number
    description: string
    image_url: string
    fname: string
    lname: string
    email: string


};

export type Treks = {
    id: string
    name: string
    difficunty: string
    country: string
    description: string
    distance: number
    image_url: string
    created_at: Date
    fname: string
    lname: string
    email: string
};


export type Users_ = {
    id: string 
    googleId: string
    email: string
    role: string
    fname: string
    lname: string
    image_url: string
    phone: string
    description: string
};

export type User = {
    id: string
    googleId: string
    email: string
    role: string
    password: string
    fname: string
    lname: string
    image_url: string
    phone: string
    description: string
};