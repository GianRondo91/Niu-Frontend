import { LOAD } from '../types/productType';

const initialState = {
    products: {}
};

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD:
            return {
                ...state, 
                products: action.payload
            }

        default:
            return state
    }
};

export default productReducer;