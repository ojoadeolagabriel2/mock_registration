import React from 'react';
import PropTypes from 'prop-types';
import GlobalAppStyle from './App.style';

import Address from '../components/address/address';
import { useExperience } from '../context/experienceContext';

/**
 * Micro-app entry-point
 * @param {*} proposition venture name
 * @param {*} trackEvent analytics tracking event
 */
const App = ({ proposition, trackEvent }) => {
    const experience = useExperience();

    return (
        <div className="container">
            <br />
            <div className="card">
                <div className="card-body">
                    <GlobalAppStyle />
                    Contact & Security
                    <br/>

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
    proposition: PropTypes.string.isRequired,
    trackEvent: PropTypes.func.isRequired
};

export default App;
