import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import useFetch from '../../store/hooks/useFetch';
import { STATUS, FORM_REDUCER_ACTION_TYPE } from '../../store/reducer/form';
import { ADDRESS_SEARCH_ACTION_TYPE } from '../../store/reducer/flowReducer';

const TEST_ADDRESS = 'n165ua';

const AddressSearch = ({ name }) => {
    const field = useSelector(state => state.form[name]);
    const flow = useSelector(state => state.flow);
    const res = useFetch('/addresses/lookup', {});
    const dispatcher = useDispatch();

    if (res.isLoading) {
        return <div>Loading...</div>;
    }

    function processBlur(event) {
        const address = event.target.value;
        dispatcher({
            type: FORM_REDUCER_ACTION_TYPE.UPDATE_FIELD,
            payload: {
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

    return (
        <div>
            Search: <input id={name} value={field.value} onBlur={processBlur} />
            {flow.visible && <div> searching... </div>}
        </div>
    );
};

AddressSearch.propTypes = {
    name: PropTypes.string.isRequired
};

export default AddressSearch;
