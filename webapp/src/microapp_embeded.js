import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import singleSpaReact from 'single-spa-react';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import form from './store/reducer/form';
import flow from './store/reducer/flowReducer';
import { ExperienceProvider } from './context/experienceContext';

// default venture name
const PROPOSITION = 'starspins';


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

// setup store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ form, flow });
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// experience
const contract = {
    queryParams: QUERY_SEARCH_PARAMS_OBJ
};

const home = () => {
    return (
        <Provider store={store}>
            <ExperienceProvider contract={contract}>
                <App proposition={PROPOSITION} />
            </ExperienceProvider>
        </Provider>
    );
};

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: home
});

export default reactLifecycles
