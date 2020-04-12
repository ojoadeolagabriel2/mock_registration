import { Validator } from 'jsonschema';

export const validatePotentialAddressesSchema = resource => {
    const validator = new Validator();
    const potentialAddressSchema = {
        id: '/PotentialAddress',
        type: 'object',
        properties: {
            text: { type: 'string' },
            description: { type: 'string' },
            groupResultsCount: { type: 'integer' },
            _links: {
                type: 'object'
            }
        },
        additionalProperties: true
    };

    const schema = {
        id: '/PotentialAddresses',
        type: 'array',
        properties: {
            addresses: { $ref: '/PotentialAddress' }
        }
    };

    validator.addSchema(potentialAddressSchema, '/PotentialAddresses');
    return validator.validate(resource, schema).valid;
};

export const validateAddressSchema = data => {
    console.log(data)
    const validator = new Validator();

    const schema = {
        type: 'object',
        properties: {
            line1: { type: 'string' },
            line2: { type: 'string' },
            city: { type: 'string' },
            county: { type: 'string' },
            postcode: { type: 'string' }
        },
        additionalProperties: true
    };

    validator.addSchema(schema, '/Address');
    return validator.validate(data, schema).valid;
};
