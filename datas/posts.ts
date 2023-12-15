import { profile } from './root';
import { PostData } from './type';

const config = useRuntimeConfig()

export const posts: Array<PostData> = [
    {
        headline: 'First Time Rebranding Web App',
        description: 'Businesses must stay relevant through website rebranding',
        slug: 'first-time-rebranding-web-app',
        image: '',
        alt: '',
    },
    {
        headline: 'Avoid These Laravel Upgrade Mistakes',
        description: 'Tips on how to safely and efficiently upgrade an out-of-date Laravel app',
        slug: 'avoid-these-laravel-upgrade-mistakes',
        image: '',
        alt: '',
    },
]

export const modifyLink: string = (slug: string) => {
    return '/posts/' + slug
}

export const modifyFullLink: string = (slug: string) => {
    return '/posts/' + slug
}

export const modifyImageLink: string = (slug: string, file_name: string) => {
    return '/images/posts/'+slug+'/'+file_name
}

export const modifyFullImageLink: string = (slug: string) => {
    return '/images/posts/'+slug+'/seo_image.jpg'
}

export const getPost: Object = (slug: string) => {
    return posts.filter((post) => {
        return post.slug === slug
    })[0]
}

export const getSEOMeta: Object = (slug: string) => {
    let post = getPost(slug)

    return {
        author: profile.fullname,
        creator: profile.fullname,
        title: post.headline,
        description: post.description,
        ogTitle: post.headline,
        ogDescription: post.description,
        ogType: 'article',
        ogUrl: config.public.app_url+modifyFullLink(post.slug),
        ogImage: config.public.app_url+modifyFullImageLink(post.slug),
        twitterCard: 'summary_large_image',
    }
}

export const getDetails: Array<Object> = (slug: string) => {
    return [
        getPost(slug),
        getSEOMeta(slug),
    ]
}