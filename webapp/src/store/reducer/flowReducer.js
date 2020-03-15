const flowState = {
    visible: false
};

export const ADDRESS_SEARCH_ACTION_TYPE = {
    SHOW_DROPDOWN: 'show_dropdown',
    HIDE_DROPDOWN: 'hide_dropdown'
};

const flowReducer = (state = flowState, { payload, type } = {}) => {
    switch (type) {
        case ADDRESS_SEARCH_ACTION_TYPE.SHOW_DROPDOWN:
            return {
                ...state,
                visible: payload.visible
            };
        case ADDRESS_SEARCH_ACTION_TYPE.HIDE_DROPDOWN:
            return {
                ...state,
                visible: false
            };
        default:
            return state;
    }
};

export default flowReducer;
