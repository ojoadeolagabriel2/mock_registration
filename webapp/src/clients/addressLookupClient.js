import getCall from './shared/xhr';
import {
    validatePotentialAddressesSchema,
    validateAddressSchema
} from './validator/addressValidator';

export const fetchPotentialAddressesByAddressInput = ({ query, host, validate = true }) => {
    return getCall({
        url: `${host}/address?${query}`,
        headers: { 'Content-Type': 'application/json' },

        onComplete: response => {
            if (validate) {
                const isValidResponse = validatePotentialAddressesSchema(response.data);
                if (!isValidResponse) {
                    throw new Error("Address lookup response doesn't match schema!");
                }
            }
            return response;
        },
        onError: error => {
            throw error;
        }
    });
};

export const fetchPotentialAddressesByAddressGroupId = ({ query, host, validate = true }) => {
    return getCall({
        url: `${host}/address?${query}`,
        headers: { 'Content-Type': 'application/json' },

        onComplete: response => {
            if (validate) {
                const isValidResponse = validatePotentialAddressesSchema(response.data);
                if (!isValidResponse) {
                    throw new Error("Address lookup response doesn't match schema!");
                }
            }
            return response;
        },
        onError: error => {
            throw error;
        }
    });
};

export const fetchPotentialAddressesByAddressId = ({ addressId, host, validate = true }) => {
    return getCall({
        url: `${host}/address/${addressId}`,
        headers: { 'Content-Type': 'application/json' },

        onComplete: response => {
            if (validate) {
                const isValidResponse = validateAddressSchema(response.data);
                if (!isValidResponse) {
                    throw new Error("Address lookup response doesn't match schema!");
                }
            }
            return response;
        },
        onError: error => {
            throw error;
        }
    });
};
