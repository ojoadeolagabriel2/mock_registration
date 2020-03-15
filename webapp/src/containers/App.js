import React from 'react';
import PropTypes from 'prop-types';
import GlobalAppStyle from './App.style';

import Address from '../components/address/address';

/**
 * Micro-app entry-point
 * @param {string} proposition venture name
 * @param {func} trackEvent analytics tracking event
 */
const App = ({ proposition, trackEvent, queryParams }) => {
    const process = tempData => {
        trackEvent(tempData);
    };

    return (
        <div className="container">
            <GlobalAppStyle />
            <div onClick={() => process(1)}>
                we are online using {proposition} <div className="badge badge-secondary">0</div>
            </div>
            <br />
            <Address name="searchBar" />
            <br />
        </div>
    );
};

App.propTypes = {
    proposition: PropTypes.string.isRequired,
    queryParams: PropTypes.shape({
        locale: PropTypes.string,
        layout: PropTypes.string.isRequired
    }).isRequired,
    trackEvent: PropTypes.func
};

export default App;
