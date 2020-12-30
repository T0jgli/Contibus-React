import * as contentful from "contentful"

const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACEID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESTOKEN
})

const SetContentFulData = (type, order) => {
    return client.getEntries({
        content_type: type,
        order: order
    }).then(resp => resp.items)
}

export default SetContentFulData