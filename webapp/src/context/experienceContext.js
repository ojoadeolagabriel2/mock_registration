import React, {createContext, useContext} from 'react';
import PropTypes from 'prop-types';

export const ExperienceContext = createContext();

export const ExperienceProvider = ({ children, contract }) => (
    <ExperienceContext.Provider value={contract}>{children}</ExperienceContext.Provider>
);

export const useExperience = () => useContext(ExperienceContext);

ExperienceProvider.displayName = 'ExperienceProvider';
ExperienceProvider.propTypes = {
    children: PropTypes.element.isRequired,
    contract: PropTypes.shape({
        queryParams: PropTypes.shape({
            locale: PropTypes.string,
            layout: PropTypes.string
        })
    }).isRequired
};