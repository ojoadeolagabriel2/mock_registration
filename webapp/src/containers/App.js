import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import logger from 'terminal-log';
import GlobalAppStyle from './App.style';

import Address from '../components/address/address';
import { useExperience } from '../context/experienceContext';
import usePost from '../store/hooks/usePost';

/**
 * Micro-app entry-point
 * @param {*} proposition venture name
 */
const App = ({ proposition }) => {
    const experience = useExperience();

    usePost({
        url: 'https://www.google.com',
        payload: {
            id: 1
        },
        config: {
            headers: {
                'X-PAYLOAD': '10001'
            }
        },
        onComplete: result => {
            logger.info(result);
        }
    });

    return (
        <div className="container">
            <br />
            <div className="card">
                <div className="card-body">
                    <GlobalAppStyle />
                    Contact & Security
                    <br />
                    app: {proposition} {experience.queryParams.locale}
                    <br />
                    <Address name="searchBar" label="Search" />
                    <br />
                </div>
            </div>
        </div>
    );
};

App.propTypes = {
    proposition: PropTypes.string.isRequired
};

export default App;
