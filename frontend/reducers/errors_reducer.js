import { RECEIVE_ERRORS } from "../actions/errors_actions";

const errorsReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        default:
            return state; 
    }
}; 


export default errorsReducer;

