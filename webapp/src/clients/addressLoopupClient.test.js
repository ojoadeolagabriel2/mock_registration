import {
    fetchPotentialAddressesByAddressGroupId,
    fetchPotentialAddressesByAddressInput,
    fetchPotentialAddressesByAddressId
} from './addressLookupClient';
import {
    testPotentialAddressesResponse,
    sampleAddressResponse
} from '../../__fixtures__/sampleResponse';

const axios = require('axios');

describe('When address input is called', async () => {
    axios.get.mockResolvedValue({
        data: testPotentialAddressesResponse
    });

    await fetchPotentialAddressesByAddressInput({
        query: 'addressInput=1',
        host: 'http://localhost:12345',
        validate: true
    });
});

describe('When address group id is called', async () => {
    axios.get.mockResolvedValue({
        data: testPotentialAddressesResponse
    });

    await fetchPotentialAddressesByAddressGroupId({
        query: 'adddressGroupId=1',
        host: 'http://localhost:12345',
        validate: true
    });
});

describe('When address id is called', async () => {
    it('call happens exactly once', async () => {
        axios.get.mockResolvedValue({
            data: sampleAddressResponse
        });

        fetchPotentialAddressesByAddressId({
            query: '1001',
            host: 'http://localhost:12345',
            validate: true
        }).then(response => {

        });
    });
});
