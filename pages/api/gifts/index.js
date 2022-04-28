require('dotenv/config')

const tokenApi = process.env.API_DATOCMS_KEP

console.log(process.env.API_DATOCMS_KEL)

export default function getGifts(request, response) {
    if (request.method === 'POST') {
        fetch('https://graphql.datocms.com/', {
            method: 'POST',
            headers: {
                'Authorization': tokenApi,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                "query": `query {
                allGifts(first: 100, orderBy: product_ASC) {
                    id
                    product
                    description
                    name
                    contact
                    url
                }
            }` })
        })
            .then((res) => res.json()) // Pega o retorno do response.json() e já retorna
            .then((res) => {
                const gifts = res.data.allGifts;
                response.json(gifts)
            })
    }
}