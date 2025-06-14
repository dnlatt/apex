export interface Review {
    imgURL: string;
    designerName: string;
    shoutout: string;
  }

export interface Product {
    id: number;
    name: string;
    price: string;
    imgURL: string;
    description?: string;
}

export interface ReviewCardProps {
    imgURL: string;
    designerName: string;
    shoutout: string;
}

export interface ServiceCardProps {
    imgURL: string;
    label: string;
    subtext: string;
}
  