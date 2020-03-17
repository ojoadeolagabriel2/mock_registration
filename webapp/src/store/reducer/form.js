export const STATUS = {
    NEW: 'new',
    UPDATED: 'updated',
    INVALID: 'invalid'
};

export const FORM_REDUCER_ACTION_TYPE = {
    UPDATE_FIELD: 'update_field',
    CLEAR_FIELD: 'clear_field',
    INVALID_FIELD: 'invalid_field'
};

export const defaultFields = {
    email: { status: STATUS.NEW },
    title: { status: STATUS.NEW },
    firstName: { status: STATUS.NEW },
    middleName: { status: STATUS.NEW },
    addressSearch: { status: STATUS.NEW, color: 'RED' },
    street1: { status: STATUS.NEW },
    street2: { status: STATUS.NEW },
    town: { status: STATUS.NEW }
};

const formReducer = (state = defaultFields, { payload, type } = {}) => {
    switch (type) {
        case FORM_REDUCER_ACTION_TYPE.UPDATE_FIELD:
            return {
                ...state,
                [payload.fieldName]: { ...state[payload.fieldName], ...payload.status }
            };
        case FORM_REDUCER_ACTION_TYPE.CLEAR_FIELD:
            return {
                ...state,
                [payload.fieldName]: { ...state[payload.fieldName], ...payload.status }
            };
        case FORM_REDUCER_ACTION_TYPE.INVALID_FIELD:
            return {
                ...state,
                [payload.fieldName]: { ...state[payload.fieldName], ...payload.status }
            };
        default:
            return state;
    }
};

export default formReducer;
