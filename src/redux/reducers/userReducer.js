import { LOGIN, LOGOUT } from '../types/userType';

const initialState = {
    userId : null,
    token: ''
};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return {
                ...state, 
                userId: action.payload.id,
                token: action.payload.token
            }

        case LOGOUT:
            return {
                ...state,
                token: null,
                user: {}
            }

        default:
            return state
    }
};

export default userReducer;