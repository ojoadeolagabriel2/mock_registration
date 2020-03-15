import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import singleSpaReact from 'single-spa-react';
import App from './containers/App';

export const bundle = ({ proposition, trackEvent, onComplete }) => {
    return <App proposition={proposition} trackEvent={trackEvent} onComplete={onComplete} />;
};

bundle.propTypes = {
    proposition: PropTypes.string.isRequired,
    trackEvent: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired
};

const parcel = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: bundle
});

export default parcel;
