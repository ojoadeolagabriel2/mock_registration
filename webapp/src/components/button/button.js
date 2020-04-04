import React from 'react';
import PropTypes from "prop-types";

const Button = ({id, description}) => {
    return (
        <>
            <input id={id} type="button" value={description}/>
        </>
    )
};

Button.propTypes = {
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Button