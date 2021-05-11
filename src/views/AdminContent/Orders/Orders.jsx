import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Collapse, CardBody, Card } from 'reactstrap';
import classNames from 'classnames';

const Orders = (props) => {

    let history = useHistory();

    const [orders, setOrders] = useState([]);
    const [openIndex, setOpenIndex] = useState(-1);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {

            let token = props.token;

            if (!token) {
                return;
            }

            let result = await axios.get(`https://niubackend.herokuapp.com/products`, { headers: { authorization: token } });

            setProducts(result.data);
        }
        getProducts();
    }, []);

    useEffect(() => {
        const getOrders = async () => {

            let token = props.token;

            if (!token) {
                return;
            }

            let result = await axios.get(`https://niubackend.herokuapp.com/orders?delivered=0`, { headers: { authorization: token } });

            setOrders(result.data);
        }
        getOrders();
    }, []);

    const viewOrder = async (order, index) => {

        if (!order.products) {
            let result = await axios.get(`https://niubackend.herokuapp.com/orders/${order.id}/products`, { headers: { authorization: props.token } });

            order.products = result.data.map(
                orderProduct => {
                    return {
                        product: products.find(product => product.id === orderProduct.idProduct),
                        count: orderProduct.count
                    };
                });
        }

        let newOrders = [...orders];
        newOrders.splice(index, 1, { ...order });

        setOrders(newOrders);

        if(openIndex === index){
            setOpenIndex(-1);
        }else{
            setOpenIndex(index);
        }
    }
    const cancelOrder = async (order, index) => {

        let confirmar = window.confirm('¿Seguro que quieres cancelar la orden?');
        if (!confirmar) {
            return;
        };
        
        let result = await axios.delete(`https://niubackend.herokuapp.com/orders/${order.id}`, { headers: { authorization: props.token } });
        
        if(result.status === 200){
            let newOrders = [...orders];
            newOrders.splice(index, 1);
            setOrders(newOrders);
        }
    };

    const deliverOrder = async (order, index) => {

        let confirmar = window.confirm('¿Seguro que quieres entregar la orden?');
        if (!confirmar) {
            return;
        };
        
        let result = await axios.put(`https://niubackend.herokuapp.com/orders/${order.id}`, {id: order.id, delivered: true}, { headers: { authorization: props.token } });
        
        if(result.status === 200){
            let newOrders = [...orders];
            newOrders.splice(index, 1);
            setOrders(newOrders);
        }
    };

    const getProductElements = (order) => {

        if (!order.products) {
            return null;
        }

        return order.products.map(orderProduct => {
            return <div className="ticket-order" key={orderProduct.product.id}>
                <div className="name-product"><em className="order-title">Producto: </em>{orderProduct.product.name}</div>
                <div className="name-product"><em className="order-title">Descipción: </em>{orderProduct.product.description}</div>
                <div className="count"><em className="order-title">Cantidad: </em>{orderProduct.count}</div>
                <div className="price-counts"><em className="order-title">Precio: </em>{Math.round(orderProduct.product.price * orderProduct.count,2)} €</div>
                <hr />
            </div>
        });
    };

    const getOrderElements = () => {

        return orders.map((order, index) => {
            return <div key={order.id} className={classNames("order order-admin", {"delivered": order.delivered})}>
                <div className="order-id"><em className="order-title">Id: </em>{order.id}</div>
                <div className="order-date"><em className="order-title">Fecha de pedido: </em>{order.createdAt}</div>
                <div className="order-delivered"><em className="order-title">Estado: </em>{order.delivered ? "Entregada" : "Pendiente"}</div>
                <div className="order-price"><em className="order-title">Precio Total: </em>{Math.round(order.price, 2)} €</div>
                <div className="order-button btn-order-admin" onClick={() => viewOrder(order, index)}>Ver detalle</div>
                <div className={classNames("order-cancel order-deliver btn-order-admin", {"hidden": order.delivered})} onClick={() => deliverOrder(order, index)}>Entregar</div>   
                <div className={classNames("order-cancel btn-order-admin", {"hidden": order.delivered})} onClick={() => cancelOrder(order, index)}>Cancelar</div>                
                <Collapse isOpen={openIndex === index}>
                    <Card>
                        <CardBody>
                            {getProductElements(order)}
                        </CardBody>
                    </Card>
                </Collapse>
            </div>;
        });
    };

    //ver si esta logeado
    if (!props.token) {
        setTimeout(() => {
            history.push('/');
        }, 200);

        return null;
    }


    return (
        <div className="order-history order-history-order-admin">
            <div className="history-title">Ordenes pendientes de entrega</div>
            {getOrderElements()}
        </div>
    )
};
const mapStateToProps = state => {
    return {
        token: state.userReducer.token
    }
};

export default connect(mapStateToProps)(Orders);