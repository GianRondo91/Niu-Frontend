import { LOGIN, LOGOUT } from '../types/userType';

const initialState = {
    userId : null,
    token: '',
    isAdmin: false
};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return {
                ...state, 
                userId: action.payload.id,
                token: action.payload.token,
                isAdmin: action.payload.isAdmin,
                name: action.payload.name
            }

        case LOGOUT:
            return {
                ...state,
                token: null,
                name: null,
                isAdmin: false,
                userId: null
            }

        default:
            return state
    }
};

export default userReducer;