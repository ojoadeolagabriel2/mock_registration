import testResponse from '../__fixtures__/sampleResponse';

const axios = {
    get: jest.fn(() => Promise.resolve({ data: testResponse }))
};

module.exports = axios;