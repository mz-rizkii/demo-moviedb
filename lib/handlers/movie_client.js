const axios_helper = require('../helper/axios_helper');

const baseURL = 'https://www.omdbapi.com/';

const apikey = '8943025e';

const timeout = 3000;

const { sendGETRequest } = axios_helper({ baseURL, timeout });

const searchMovieByTitle = async (keyword, page = 1) => {
    const url = '/'

    const query = { apikey, s: keyword, page }

    return sendGETRequest({ url, query });
};

const viewMovieDetail = (id) => id;

module.exports = { 
    searchMovieByTitle,
    viewMovieDetail
}