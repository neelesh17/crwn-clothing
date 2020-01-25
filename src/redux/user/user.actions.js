import { userActionTypes } from './user.action.types'; 
export const setCurrentUser = user => ({
    type: userActionTypes.setCurrentUser,
    payload: user
})