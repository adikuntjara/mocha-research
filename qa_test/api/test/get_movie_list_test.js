const assert = require('chai').expect;

const code = require('../../../qa_test/api/helper/reponse_code_message.json')
const data = require('../../../qa_test/api/data/get_movie_list_data.json')
const page = require('../../../qa_test/api/page/get_movie_list_page.js');

const testCase = {
    "positive": {
        "getList": "As a User, I want to be able to get OMDB Movie list",
    },
    "negative": {
        "noSearch": "As a User, I should got error message when I send request without key of search",
        "invalidApiKey": "As a User, I should got error 401 when I send request with invalid API Key"
    }
}

describe(`OMDB Movie List`, () => {

    it(`@get ${testCase.positive.getList}`, async () => {
            const response = await page.getMovieList(data.apiKey, data.keySearch);
            assert(response.status).to.equal(code.successOk, response.body.message);
        }),

        it(`@get ${testCase.negative.noSearch}`, async () => {
            const response = await page.getMovieList(data.apiKey, '');
            assert(response.status).to.equal(code.successOk, response.body.message);
            assert(response.body.Response).to.equal('False');
            assert(response.body.Error).to.equal('Incorrect IMDb ID.');
        }),

        it(`@get ${testCase.negative.invalidApiKey}`, async () => {
            const response = await page.getMovieList(data.invalidApiKey, data.keySearch);
            assert(response.status).to.equal(code.failedUnauthorized.codeNumber, response.body.message);
            assert(response.body.Response).to.equal('False');
            assert(response.body.Error).to.equal('Invalid API key!');
        })
})
