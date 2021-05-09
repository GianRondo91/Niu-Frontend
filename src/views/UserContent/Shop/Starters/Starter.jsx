import React from 'react';
import { connect } from 'react-redux';
import { ADD_PRODUCT } from '../../../../redux/types/orderType';

const Starter = (props) => {

    const addProduct = (product) => {
        props.dispatch({type: ADD_PRODUCT, payload: {product: product, count: 1}});
    };

    const getProductElements = () => {
        let elements = [];

        for (let product of props.products){
            elements.push(<div key={product.id} className="product">
                <div className="product-img"><img src={product.image} alt="" className="image"/></div>
                <div className="product-name">{product.name}</div>
                <div className="product-price">{product.price}€</div>
                <div className="product-button" onClick={() => addProduct(product)}>Agregar</div>
            </div>)
        };
        return elements;
    }

    return (
        <div className="starter">
            {getProductElements()}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        products: state.productReducer.products.starter
    }
};

export default connect(mapStateToProps)(Starter);