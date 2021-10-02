const supertest = require('supertest');

const app = require('../../');

const {
    findVisitorLog, removeVisitorLog
} = require('../../db/visitor_log_repository')

const demo_search_title = 'Batman';

const demo_movie_id = 'tt1117563';

describe('inspect endpoints', inspectEndpoints);

function inspectEndpoints() {
    it('check GET /search', inspectSearchRequest);

    it('check GET /detail', inspectDetailRequest);

    after('clear sample logs', removeSampleLog);
}

/**
 * Check Request GET /search
 */
async function inspectSearchRequest() {
    const { body } = await supertest(app)
    .get(`/search?title=${demo_search_title}`)
    .expect(200)
}

/**
 * Check Request GET /detail
 */
async function inspectDetailRequest() {
    const { body } = await supertest(app)
    .get(`/detail?id=${demo_movie_id}`)
    .expect(200)
}

async function removeSampleLog(){
    const [{ id: search_record_id }, { id: view_detail_id }] = await Promise.all([
        findVisitorLog('search', demo_search_title),
        findVisitorLog('detail', demo_movie_id),
    ]);

    const removed_records = [search_record_id, view_detail_id].map((id) => removeVisitorLog(id))

    await Promise.all(removed_records)
}