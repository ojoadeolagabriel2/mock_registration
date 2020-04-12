import axios from 'axios';

export default async ({ url, headers, onError = () => {}, onComplete = () => {} }) => {
    if (!url) {
        return null;
    }

    try {
        const response = await axios.get(url, headers);
        return onComplete(response);
    } catch (error) {
        return onError(error);
    }
};
