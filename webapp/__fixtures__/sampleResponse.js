export const testPotentialAddressesResponse = {
    addresses: [
        {
            text: 'Gamesys Ltd London, W1J 0DD',
            description: '',
            groupResultsCount: 0,
            _links: {
                retrieve:
                    'http://localhost:8080/registration-microapp-api/v1/address/123-GAMESYS'
            }
        },
        {
            text: 'Mice and Dice Ltd London, W1J 0DD',
            description: '',
            groupResultsCount: 0,
            _links: {
                retrieve:
                    'http://localhost:8080/registration-microapp-api/v1/address/456-MICE-AND-DICE'
            }
        }
    ]
};

export const sampleAddressResponse = {
    address: {
        "line1": "Swan Gardens",
        "line2": "10 Piccadilly",
        "city": "London",
        "county": "Westminster",
        "postcode": "W1J 0DD"
    }
};