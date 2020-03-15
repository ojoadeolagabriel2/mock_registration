export const STATUS = {
    NEW: 'new',
    UPDATED: 'updated',
    INVALID: 'invalid'
};

export const FORM_REDUCER_ACTION_TYPE = {
    UPDATE_FIELD: 'update_field',
    CLEAR_FIELD: 'clear_field'
};

export const defaultFields = {
    email: { status: STATUS.NEW },
    title: { status: STATUS.NEW },
    firstName: { status: STATUS.NEW },
    address_search: { status: STATUS.NEW }
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
        default:
            return state;
    }
};

export default formReducer;
