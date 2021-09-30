const axios = require('axios');

const qs = require('qs');

const helper = ({ baseURL, timeout }) => {
    const instance = axios.create({ baseURL, timeout });

    const sendGETRequest = async ({ url, query }) => {
        try {
            const query_string = query? `?${qs.stringify(query)}` : '';

            const { data } = await instance.get(`${url}${query_string}`)

            return data;
        } catch (error) {
            const { response, request, message } = error;

            if (response) {
                const { data, status } = response;

                throw { status, error: data }
            }

            throw { message };
        }
    }

    return { sendGETRequest }
}

module.exports = helper;