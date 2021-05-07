import {combineReducers} from 'redux';
import userReducer from './userReducer';
import orderReducer from './orderReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
    userReducer, 
    orderReducer,
    productReducer
});

export default rootReducer;