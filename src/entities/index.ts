export interface Home {
    id: number;
    name: string;
    price: number;
    squareFeetArea: number;
    bathrooms: number;
    bedrooms: number;
    images: string;
    address: string;
    state: string;
  }

 export interface Realtor {
    id: number;
    name: string;
    title: string;
    for_sale: number;
    sold: number;
    experience: string;
    phone_number: string;
    address: string;
  }

 export interface Rent {
    id: number;
    name: string;
    price: number;
    squareFeetArea: number;
    bathrooms: number;
    bedrooms: number;
    images: string;
    streetAddress: string;
  }

 export interface Data {
    id: number;
    name: string;
    price: number;
    squarefeet: number;
    bathroom: number;
    bedroom: number;
    image: string;
    location: string;
  }