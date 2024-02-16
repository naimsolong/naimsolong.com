export default interface BaseData {
    fullname: string;
    shortname: string;
    username: string;
    name: string;
    image: string;
}

export default interface PostData {
    headline: string;
    description: string;
    slug: string;
    image: string;
    alt?: string;
}

export default interface ProjectData {
    headline: string;
    description: string;
    slug: string;
    image: string;
    alt?: string;
}

export default interface ImageData {
    headline?: string;
    description?: string;
    link?: string;
    image: string;
    alt?: string;
}

export default interface SocialData {
    title: string;
    link: string;
}