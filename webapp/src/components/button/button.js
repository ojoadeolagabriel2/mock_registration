import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import ButtonStyled from "../../elements/Button.styled";

const Button = ({ id, description }) => {
    const handleClick = (e, o) => {
    
    }

    return (
        <>
            <ButtonStyled id={id} onClick={handleClick} />
        </>
    )
};

Button.propTypes = {
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

const CenteredButton = ({id, description, visible}) => {
    return (
        visible ? <div>
        <Button id={id} description={description}/>
    </div> : <Fragment>nothing found!</Fragment>
    )
}

export default Button