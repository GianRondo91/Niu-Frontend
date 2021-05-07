import { CANCEL, ADD_PRODUCT, REMOVE_PRODUCT } from '../types/orderType';

const initialState = {
    order: {
        products: [],
        price: 0,
        productCount: 0
    }
};

const orderReducer = (state = initialState, action) => {

    switch (action.type) {
        case CANCEL:
            
            return {
                ...state, 
                order: {
                    products:[],
                    price: 0
                }
            }

        case ADD_PRODUCT:
            {
                const product = action.payload.product;

                let totalPrice = product.price * action.payload.count;

                let orderProduct = state.order.products.find(p => p.product.id === product.id);

                if (orderProduct) {
                    orderProduct.count += action.payload.count;
                } else {
                    state.order.products.push(action.payload);
                }

                return {
                    ...state,
                    order: {
                        ...state.order,
                        price: state.order.price + totalPrice,
                        productCount: state.order.productCount + action.payload.count
                    }
                };
            }

        case REMOVE_PRODUCT:
            {
                let orderProduct = state.order.products.find(p => p.product.id === action.payload.product.id);

                if (orderProduct) {

                    if(orderProduct.count <= 0){
                        state.order.products.splice(state.order.products.indexOf(orderProduct), 1);
                    }

                    return {
                        ...state,
                        order: {
                            ...state.order,
                            price: orderProduct.count - action.payload.count,
                            productCount: state.order.productCount - Math.min(action.payload.count, orderProduct.count)
                        }
                    };
                }

                return state;
            }

        default:
            return state
    }
};


export default orderReducer;