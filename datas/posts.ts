import { profile } from './root';
import { PostData } from './type';

export const posts: Array<PostData> = [
    {
        headline: 'First Time Rebranding Web App',
        description: 'Businesses must stay relevant through website rebranding',
        slug: 'first-time-rebranding-web-app',
        image: '',
        alt: '',
    },
]

export const getPost: Object = (slug: string) => {
    return posts.filter((post) => {
        return post.slug === slug
    })[0]
}

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
    return '/posts/' + slug
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
        ogUrl: modifyFullLink(post.slug),
        ogImage: modifyFullImageLink(post.image),
        twitterCard: 'summary_large_image',
    }
}