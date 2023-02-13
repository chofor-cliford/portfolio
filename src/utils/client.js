import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: 'eq8zcuph',
    dataset: 'production',
    apiVersion: '2022-10-7',
    useCdn: true,
    token: process.env.REACT_APP_API_TOKEN ,
})

