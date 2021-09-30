const axios_helper = require('../helper/axios_helper');

const baseURL = 'https://www.omdbapi.com/';

const apikey = '8943025e';

const timeout = 3000;

const { sendGETRequest } = axios_helper({ baseURL, timeout });

/**
 * Search movie by title with optional page parameter
 * @param {string} keyword 
 * @param {number} page 
 * @returns 
 */
const searchMovieByTitle = async (keyword, page = 1) => {
    const url = '/'

    const query = { apikey, s: keyword, page }

    return sendGETRequest({ url, query });
};

/**
 * Fetch movie detail 
 * @param {string} id 
 * @returns 
 */
const viewMovieDetail = (id) => {
    const url = '/'

    const query = { apikey, i: id }

    return sendGETRequest({ url, query });
};;

module.exports = { 
    searchMovieByTitle,
    viewMovieDetail
}