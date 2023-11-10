import { BaseData, ImageData, SocialData } from './type';

export const profile: BaseData = {
    fullname: 'Amirul Naim Mohd Solong',
    shortname: 'Amirul Naim',
    username: 'naimsolong',
    name: 'Amirul',
    image: '/images/profiles/starlink.jpg',
}

export const offers: Array<ImageData> = [
    {
        headline: 'Web Development',
        description: 'Front-to-back-end development',
        image: 'images/skills/web-svgrepo-com.svg',
        alt: 'Web Development',
    },
    {
        headline: 'API Integration',
        description: 'Allow system to drive revenue rapidly',
        image: 'images/skills/api-svgrepo-com.svg',
        alt: 'API Integration',
    },
    {
        headline: 'Unit Test',
        description: 'Build a fully automation tests script',
        image: 'images/skills/tick-svgrepo-com.svg',
        alt: 'Unit Test',
    },
    {
        headline: 'Server Deployment',
        description: 'Deployment using RunCloud',
        image: 'images/skills/server-svgrepo-com.svg',
        alt: 'Server Deployment',
    },
]

export const stacks: Array<ImageData> = [
    {
        image: '/images/stacks/tech-laravel.png',
        link: 'https://laravel.com',
    },
    {
        image: '/images/stacks/tech-inertiajs.png',
        link: 'https://inertiajs.com',
    },
    {
        image: '/images/stacks/tech-vuejs.png',
        link: 'https://vuejs.org',
    },
    {
        image: '/images/stacks/tech-svelte.png',
        link: 'https://svelte.dev',
    },
    {
        image: '/images/stacks/tech-tailwindcss.png',
        link: 'https://tailwindcss.com',
    },
    {
        image: '/images/stacks/tech-pest.png',
        link: 'https://pestphp.com',
    },
    {
        image: '/images/stacks/tech-mysql.png',
        link: 'https://www.mysql.com',
    },
    {
        image: '/images/stacks/tech-aws.png',
        link: 'https://aws.amazon.com',
    },
    {
        image: '/images/stacks/tech-do.png',
        link: 'https://www.digitalocean.com',
    },
    {
        image: '/images/stacks/tech-nginx.png',
        link: 'https://www.nginx.com',
    },
    {
        image: '/images/stacks/tech-docker.png',
        link: 'https://docker.com',
    },
    {
        image: '/images/stacks/tech-runcloud.png',
        link: 'https://runcloud.io',
    },
    {
        image: '/images/stacks/tech-vapor.png',
        link: 'https://vapor.laravel.com',
    },
]

export const socials: Array<SocialData> = [
    {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/amirul-naim-mohd-solong/',
    },
    {
        title: 'Twitter',
        link: 'https://twitter.com/naimsolong',
    },
    {
        title: 'GitHub',
        link: 'https://github.com/naimsolong',
    }
]