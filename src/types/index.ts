export interface Review {
    imgURL: string;
    designerName: string;
    shoutout: string;
  }

export interface Product {
    id: string;
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
  