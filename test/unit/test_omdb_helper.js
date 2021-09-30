const { expect } = require('chai');

const { 
  searchMovieByTitle, viewMovieDetail
} = require('../../lib/handlers/movie_client');

describe('check movie helper', checkMovieHelper);

function checkMovieHelper() {
    describe('check fetch movie from omdb', checkFetchingMovie);

    describe('check movie logger', checkMovieLogger);
}

/**
 * Check fetching data from omdb
 */
function checkFetchingMovie() {
    it('check search movie by title', checkSearchRequest);

    it('check view movie detail', checkViewDetailRequest);
}

async function checkSearchRequest() {
    const result = await searchMovieByTitle('Batman');

    expect(result, 'the search result should have search field').to.have.property('Search');
}

async function checkViewDetailRequest() {
    const result = await viewMovieDetail('tt1117563')

    expect(result, 'the search result should have search field').to.have.property('Title');
}

/**
 * Check storing history to db
 */
function checkMovieLogger() {
    it('check logging search movie by title', checkSearchMovieLog);

    it('check logging view movie detail', checkViewMovieLog);
}

async function checkSearchMovieLog() {
    
}

async function checkViewMovieLog() {

}