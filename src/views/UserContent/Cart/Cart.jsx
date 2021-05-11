import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { CLEAR, REMOVE_PRODUCT } from '../../../redux/types/orderType';

const Cart = (props) => {

    let history = useHistory();

    const removeProduct = (orderProduct) => {
        props.dispatch({type: REMOVE_PRODUCT, payload: {product: orderProduct.product, count:1 /*orderProduct.count*/}});
    };

    const getProductElements = () => {

        return props.order.products.map(orderProduct => {
            return <div className="ticket-order" key={orderProduct.product.id}>
                <div className="image-product">Image</div>
                <div className="name-product">{orderProduct.product.name}</div>
                <div className="name-product name-description">{orderProduct.product.description}</div>
                <div className="count">{orderProduct.count}</div>
                <div className="price-counts">{orderProduct.product.price * orderProduct.count} €</div>
                <div className="delete-product" onClick={() => removeProduct(orderProduct)}>x</div>
            </div>
        });
    };

    const cancelOrder = () => {
        props.dispatch({type: CLEAR, payload:{}});
    }

    const saveOrder = async() => {
        let token = props.token;

            if (!token) {
                return;
            }

            let reqOrder = {
                ...props.order,
                products: props.order.products.map(x => { return { id: x.product.id, count: x.count } })
            };

            await axios.post(`https://niubackend.herokuapp.com/orders`, reqOrder, { headers: { authorization: token } });

            props.dispatch({type: CLEAR, payload:{}});

            history.push('/user/history');
    };

    //ver si esta logeado
    if (!props.token) {
        setTimeout(() => {
            history.push('/');
        }, 200);

        return null;
    }

    if(!props.order.products || !props.order.products.length){
        return <div className="cart">
                <span className="cart-msg">Oops, parece que no tienes elementos en el carrito.</span>
            </div>
    }

    return (
        <div className="cart">
            <div className="info-title"> Detalle del pedido</div>
            <div className="ticket">
                <div className="ticket-info">
                    <div className="info-left">
                        <div className="number-order"><em>Numero de Pedido: </em>5151515151</div>
                        <div className="takeaway"><em>Método: </em>Retirar en el local</div>
                    </div>
                    <div className="info-right">
                        <div className="date"><em>Fecha de pedido: </em>5 de mayo 2021</div>
                    </div>
                </div>
                <hr/>
                <div className="ticket-orders">
                    {getProductElements()}
                </div>
                <hr/>
            </div>
            <div className="ticket-buttons">
                    <div className="total"><em>Total </em>{Math.round(props.order.price,2)} €</div>
                    <div className="cancel" onClick={cancelOrder}>Cancelar</div>
                    <div className="code-generate" onClick={saveOrder} >Comprar</div>
                </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        token: state.userReducer.token,
        order: state.orderReducer.order
    }
};

export default connect(mapStateToProps)(Cart);