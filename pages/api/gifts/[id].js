require('dotenv/config')
import { SiteClient } from "datocms-client";

const tokenApi = process.env.API_DATOCMS_KEP

const client = new SiteClient(tokenApi);

export default async function getGifts(request, response) {

    let record = await client.items.find(request.query.id)

    client.items.update(request.query.id, request.body)
    record = await client.items.find(request.query.id)
    response.json(record)
}