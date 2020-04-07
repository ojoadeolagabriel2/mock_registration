import React from 'react';
import PropTypes from "prop-types";
import ButtonStyled from "../../elements/Button.styled";

const Button = ({id, description}) => {
    return (
        <>
            <ButtonStyled/>
        </>
    )
};

Button.propTypes = {
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Button