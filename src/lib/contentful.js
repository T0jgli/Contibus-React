import * as contentful from "contentful"

export const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACEID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESTOKEN
})