const formAction = (actionType, fieldData) => {
    return {
        type: actionType,
        payload: fieldData
    };
};

export default formAction;
