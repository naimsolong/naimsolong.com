export interface BaseData {
    fullname: string;
    shortname: string;
    username: string;
    name: string;
    image: string;
}

export interface PostData {
    headline: string;
    description: string;
    slug: string;
    image: string;
    alt?: string;
}

export interface ImageData {
    headline?: string;
    description?: string;
    link?: string;
    image: string;
    alt?: string;
}

export interface SocialData {
    title: string;
    link: string;
}