// api.js
import md5 from 'md5'

export async function fetchData(offset) {
    const password = 'Valantis'
    const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '')
    const authString = md5(password + '_' + timestamp)

    const headers = {
        'X-Auth': authString,
    }

    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        body: JSON.stringify({
            action: 'get_ids',
            params: {
                offset: offset,
                limit: 50,
            },
        }),
    }

    try {
        const response = await fetch(
            'https://api.valantis.store:40000/',
            request
        )
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        return data.result
    } catch (error) {
        throw new Error(error.message)
    }
}
