import { CLEAR, ADD_PRODUCT, REMOVE_PRODUCT } from '../types/orderType';

const initialState = {
    order: {
        products: [],
        price: 0,
        productCount: 0
    }
};

const orderReducer = (state = initialState, action) => {

    switch (action.type) {
        case CLEAR:
            
            return {
                ...state, 
                order: {
                    products:[],
                    price: 0,
                    productCount: 0
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

                    let toRemove = Math.min(orderProduct.count, action.payload.count);
                    let products = [...state.order.products];

                    if(toRemove >= orderProduct.count){
                        products.splice(state.order.products.indexOf(orderProduct), 1);
                    } else {
                        orderProduct.count -= toRemove; 
                    }

                    return {
                        ...state,
                        order: {
                            ...state.order,
                            products: products,
                            price: state.order.price - toRemove * orderProduct.product.price,
                            productCount: state.order.productCount - toRemove
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