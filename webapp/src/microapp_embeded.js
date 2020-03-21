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

// setup store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ form, flow });
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export const bundle = () => {
    return (
        <Provider store={store}>
            <ExperienceProvider>
                <App proposition={PROPOSITION} />
            </ExperienceProvider>
        </Provider>
    );
};

const parcel = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: bundle
});

export default parcel;
