import axios from 'axios';
import logger from 'terminal-log';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 *
 * @param url
 * @param payload
 * @param config
 * @param onComplete
 * @param onError
 */
const usePost = ({ url, payload, config = {}, onComplete = () => {}, onError = () => {} }) => {
    const [isLoading, setLoading] = useState(true);
    const dispatch = useDispatch();
    logger.info(`is processing: ${isLoading}`);

    axios
        .post(url, payload, config)
        .then(result => {
            onComplete(result);
            setLoading(false);
            logger.info(`is processing: ${isLoading}`);
        })
        .catch(err => {
            onError(err);
            setLoading(false);
            logger.info(`is processing: ${isLoading}`);

            // track event on axios failures
            dispatch({
                type: 'FAILED_AXIOS_POST_CALL',
                payload
            });
        });
};

usePost.propTypes = {
    url: PropTypes.string.isRequired,
    payload: PropTypes.arrayOf(PropTypes.string)
};

export default usePost;
