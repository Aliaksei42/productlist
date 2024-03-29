// apiUtils.js
import md5 from 'md5'
import { fetchData } from './api.js'

export async function fetchPosts(offset) {
    try {
        // Получаем массив хэшей, вызвав функцию fetchData
        const hashes = await fetchData(offset)

        // Формируем запрос на получение постов по полученным хэшам
        const password = 'Valantis'
        const timestamp = new Date()
            .toISOString()
            .slice(0, 10)
            .replace(/-/g, '')
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
                action: 'get_items',
                params: {
                    ids: hashes, // Используем полученные хэши
                },
            }),
        }

        const response = await fetch(
            'http://api.valantis.store:40000/',
            request
        )
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        const data = await response.json();
if (!data || !data.result) {
    throw new Error('Received empty response');
}
return data.result;
    } catch (error) {
        console.error(error)
        return null
    }
}
