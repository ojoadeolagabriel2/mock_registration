import React from 'react';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import logger from 'terminal-log';
import form from './store/reducer/form';
import App from './containers/App';
import flow from './store/reducer/flowReducer';
import { ExperienceProvider } from './context/experienceContext';

const QUERY_SEARCH_PARAMS = window.location.search;
const QUERY_SEARCH_PARAMS_OBJ = {
    locale: 'en_GB',
    layout: 'default'
};

// prepare query params
if (QUERY_SEARCH_PARAMS) {
    QUERY_SEARCH_PARAMS.substring(1)
        .split('&')
        .forEach(param => {
            const [key, value] = param.split('=');
            QUERY_SEARCH_PARAMS_OBJ[key] = value;
        });
}

// default venture name
const PROPOSITION = 'starspins';

// init tracking events
const trackEvent = selectedData => {
    logger.info(selectedData);
};

// experience
const contract = {
    queryParams: QUERY_SEARCH_PARAMS_OBJ
};

// setup store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ form, flow });
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
z;
// render standalone app
render(
    <Provider store={store}>
        <ExperienceProvider contract={contract}>
            <App proposition={PROPOSITION} trackEvent={trackEvent} />
        </ExperienceProvider>
    </Provider>,
    document.getElementById('root')
);
