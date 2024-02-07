export interface IHome {
    id: number;
    type: string;
    price: number;
    address: string;
    area: number;
    bedrooms: number;
    bathrooms: number;
    homeUrl: string;
    car_type: string;
    park_spots: number;
    /* amenity: string; */
    amenity: any;
}
