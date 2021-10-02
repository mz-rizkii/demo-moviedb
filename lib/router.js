const express = require('express');

const router = express.Router();

const { handleSearchMovie, handleViewMovie } = require('./services/movie_service');

/**
 * 
 * @param {*} processor function array to get parameter from request and handle request 
 * @returns controller callback
 */
const handleRequest = (processor) => {
    return async (req, res) => {
        try {
            const response = await processor.reduce((output, handler) => {
                return handler(output)
            }, { req, res });

            res.status(200).send(response);
        } catch (error) {
            const { status = 500 } = error;

            res.status(status).send(error);
        }
    }
}

const getSearchPayload = ({ req, res }) => {
    const { query: { page = 1, title } } = req;

    if (!title) {
        throw { status: 400, message: 'title is required' }
    }

    return { page, title }
}

const getViewDetailPayload = ({ req: { query: { id } }, res }) => {
    if (!id) {
        throw { status: 400, message: 'id is required' }
    }

    return id;
}

router.get('/search', handleRequest([getSearchPayload, handleSearchMovie]))

router.get('/detail', handleRequest([getViewDetailPayload, handleViewMovie]))

module.exports = router;