import { useSelector, useDispatch } from 'react-redux';
import { formAction } from '../action/default';

export default fieldName => {
    const field = useSelector(state => state.form[fieldName]);
    const dispatcher = useDispatch();

    return event => {
        dispatcher(
            formAction({
                fieldName,
                fieldState: {
                    ...field,
                    value: event.target.value
                }
            })
        );
    };
};
