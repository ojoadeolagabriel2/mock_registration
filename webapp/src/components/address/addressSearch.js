import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import useFetch from '../../store/hooks/useFetch';
import ButtonStyled from "../../elements/Button.styled";
import { STATUS, FORM_REDUCER_ACTION_TYPE } from '../../store/reducer/form';
import { ADDRESS_SEARCH_ACTION_TYPE } from '../../store/reducer/flowReducer';

const CHECK_LENGTH = 3;
const TEST_ADDRESS = 'n165ua';

const AddressSearch = ({ name }) => {
    const field = useSelector(state => state.form[name]);
    const flow = useSelector(state => state.flow);
    const res = useFetch('/address-lookup/address', {});
    const dispatcher = useDispatch();

    if (res.isLoading) {
        return <div>Loading...</div>;
    }

    function processChange(event) {
        const address = event.target.value;
        if (address.length >= CHECK_LENGTH && address === TEST_ADDRESS) {
            dispatcher({
                type: FORM_REDUCER_ACTION_TYPE.UPDATE_FIELD,
                payload: {
                    fieldName: name,
                    value: event.target.value,
                    status: STATUS.UPDATED
                }
            });

            if (address === TEST_ADDRESS) {
                dispatcher({
                    type: ADDRESS_SEARCH_ACTION_TYPE.SHOW_DROPDOWN,
                    payload: {
                        visible: true
                    }
                });
            }
        }
    }

    return (
        <>
            <br />
            <div className="form-group">
                <label htmlFor={name}>
                    Enter <span className="badge badge-secondary">UK</span> postcode
                </label>
                <input
                    id={name}
                    value={field.value}
                    onChange={processChange}
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                />
                <small id="emailHelp" className="form-text text-muted">
                    We will never share your postcode with anyone.
                </small>
                <ButtonStyled> Submit</ButtonStyled>
            </div>
            <br />
            {flow.visible && <div> searching... </div>}
        </>
    );
};

AddressSearch.propTypes = {
    name: PropTypes.string.isRequired
};

export default AddressSearch;
