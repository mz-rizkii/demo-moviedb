const {
    searchMovieByTitle,
    viewMovieDetail
} = require('../handlers/movie_client');

const {
    storeVisitorLog
} = require('../../db/visitor_log_repository');

const { getTimestamp } = require('../helper/timestamp_helper')

/**
 * Handle request to search movie & store log
 * @param {object} seach_input
 * @param {object} seach_input.title movie keyword
 * @param {number} seach_input.page  
 * @returns object search movie response
 */
const handleSearchMovie = async ({ title, page = 1 }) => {
    const url = 'search';

    const parameters = JSON.stringify({ title, page });

    const [movie_list, visitor_log] = await Promise.all([
        searchMovieByTitle(title, page),
        storeVisitorLog({ url, parameters, timestamp: getTimestamp() })
    ]);

    return movie_list;
}

/**
 * Handle request to view movie detail & store log
 * @param {number} movie id
 * @returns object movie detail
 */
const handleViewMovie = async (id) => {
    const url = 'detail';

    const parameters = JSON.stringify({ id });

    const [movie_detail, visitor_log] = await Promise.all([
        viewMovieDetail(id),
        storeVisitorLog({ url, parameters, timestamp: getTimestamp() })
    ]);

    return movie_detail;
}

module.exports = { handleSearchMovie, handleViewMovie }