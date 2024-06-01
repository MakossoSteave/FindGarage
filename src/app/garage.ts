import { Attributes } from "./Attributes";
import { Category } from "./Category";
import { Coordinates } from "./Coordinates";
import { Location } from "./Location"; 

export  interface  garage {
    
    id:            string;
    alias:         string;
    name:          string;
    image_url:     string;
    is_closed:     boolean;
    url:           string;
    review_count:  number;
    categories:    Category[];
    rating:        number;
    coordinates:   Coordinates;
    transactions:  any[];
    location:      Location;
    phone:         string;
    display_phone: string;
    distance:      number;
    attributes:    Attributes;
}