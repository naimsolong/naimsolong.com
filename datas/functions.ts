import { profile } from './root';

const config = useRuntimeConfig()

export const modifyLink: string = (type: string, slug: string) => {
    return '/'+type+'/' + slug
}

export const modifyFullLink: string = (type: string, slug: string) => {
    return '/'+type+'/' + slug
}

export const modifyImageLink: string = (type: string, slug: string, file_name: string) => {
    return '/images/'+type+'/'+slug+'/'+file_name
}

export const modifyFullImageLink: string = (type: string, slug: string) => {
    return '/images/'+type+'/'+slug+'/seo_image.jpg'
}

export const getData: Object = (datas: Object, slug: string) => {
    return datas.filter((data) => {
        return data.slug === slug
    })[0]
}

export const getSEOMeta: Object = (datas: Object, type: string, slug: string) => {
    let data = getData(datas, slug)

    return {
        author: profile.fullname,
        creator: profile.fullname,
        title: data.headline,
        description: data.description,
        ogTitle: data.headline,
        ogDescription: data.description,
        ogType: 'article',
        ogUrl: config.public.app_url+modifyFullLink(type, data.slug),
        ogImage: config.public.app_url+modifyFullImageLink(type, data.slug),
        twitterCard: 'summary_large_image',
    }
}

export const getDetails: Array<Object> = (datas: Object, type: string, slug: string) => {
    return [
        getData(datas, slug),
        getSEOMeta(datas, type, slug),
    ]
}