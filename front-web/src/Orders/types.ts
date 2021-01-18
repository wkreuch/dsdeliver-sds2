export type Product = {
    id: number,
    name: string,
    price: number,
    description: string,
    imageUri: string;
};

export type OrderLocationdata = {
    address: string;
    latitude: number;
    longitude: number;
};
