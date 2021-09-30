const { expect } = require('chai');

const { 
  searchMovieByTitle, viewMovieDetail
} = require('../../lib/handlers/movie_client');

const {
    handleSearchMovie, handleViewMovie
} = require('../../lib/services/movie_service');

const {
    findVisitorLog, removeVisitorLog
} = require('../../db/visitor_log_repository')

const demo_search_title = 'Batman';

const demo_movie_id = 'tt1117563';

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
    const result = await searchMovieByTitle(demo_search_title);

    const field_response = ['Search', 'totalResults', 'Response']

    for (const field of field_response) {
        expect(result, `the search result should have ${field} field`).to.have.property(field);
    }
}

async function checkViewDetailRequest() {
    const result = await viewMovieDetail(demo_movie_id)

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

    after('remove sample logs', removeSampleLog)
}

async function checkSearchMovieLog() {
    await handleSearchMovie({ title: demo_search_title });

    const record = await findVisitorLog('search', demo_search_title);

    expect(record, 'the search log should have record id').to.have.property('id').to.greaterThan(0);
}

async function checkViewMovieLog() {
    await handleViewMovie(demo_movie_id);

    const record = await findVisitorLog('detail', demo_movie_id);

    expect(record, 'the search log should have record id').to.have.property('id').to.greaterThan(0);
}

async function removeSampleLog(){
    const [{ id: search_record_id }, { id: view_detail_id }] = await Promise.all([
        findVisitorLog('search', demo_search_title),
        findVisitorLog('detail', demo_movie_id),
    ]);

    const removed_records = [search_record_id, view_detail_id].map((id) => removeVisitorLog(id))

    await Promise.all(removed_records)
}