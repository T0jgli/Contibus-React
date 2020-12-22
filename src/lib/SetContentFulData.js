import { client } from "./contentful"

const SetContentFulData = (type, order) => {
    return client.getEntries({
        content_type: type,
        order: order
    }).then(resp => resp.items)
}

export default SetContentFulData