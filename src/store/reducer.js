import * as ActionTypes from './actions';
import phones from '../mock/phones';

const initialState = {
    phones
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PHONES:
            return {
                ...state,
                phones: action.payload
            };
        default:
            return state;
    }

}

export default reducer;

