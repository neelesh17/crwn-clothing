import { userActionTypes } from './user.action.types';
const INITIAL_STATE = {
    currentUser: null,
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case userActionTypes.setCurrentUser:
            return {
                ...state,
                currentUser: action.payload,
            }
        default: 
            return state;     
    }
}

export default userReducer;