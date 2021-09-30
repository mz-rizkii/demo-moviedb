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

    const field_response = ['Search', 'totalResults', 'Response']

    for (const field of field_response) {
        expect(result, `the search result should have ${field} field`).to.have.property(field);
    }
}

async function checkViewDetailRequest() {
    const result = await viewMovieDetail('tt1117563')

    const movie_fields = [
        'Title', 'Year', 'imdbID', 'Type','Poster', 'Rated', 'Released', 'Runtime', 'Genre', 'Director',
        'Writer', 'Actors', 'Plot', 'Language','Country', 'Awards', 'Ratings', 'Metascore', 'imdbRating', 'imdbVotes',
        'imdbID', 'Type', 'DVD', 'BoxOffice','Production', 'Website', 'Response'
    ];
    
    for (const field of movie_fields) {
        expect(result, `the movie detail should have ${field} field`).to.have.property(field);
    }
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