import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Shop = () => {
    return (
        <div id="shop">
            <Header />
            <div id="shop-content">
                TIENDA
                <div className="product">
                    <div className="product-img"></div>
                    <div className="product-name">Crema de Calabaza</div>
                    <div className="product-price">8€</div>
                    <div className="product-button">Agregar</div>
                </div>
                <div className="product">
                    <div className="product-img"></div>
                    <div className="product-name">Crema de Calabaza</div>
                    <div className="product-price">8€</div>
                    <div className="product-button">Agregar</div>
                </div>
                <div className="product">
                    <div className="product-img"></div>
                    <div className="product-name">Crema de Calabaza</div>
                    <div className="product-price">8€</div>
                    <div className="product-button">Agregar</div>
                </div>
                <div className="product">
                    <div className="product-img"></div>
                    <div className="product-name">Crema de Calabaza</div>
                    <div className="product-price">8€</div>
                    <div className="product-button">Agregar</div>
                </div>
                <div className="product">
                    <div className="product-img"></div>
                    <div className="product-name">Crema de Calabaza</div>
                    <div className="product-price">8€</div>
                    <div className="product-button">Agregar</div>
                </div><div className="product">
                    <div className="product-img"></div>
                    <div className="product-name">Crema de Calabaza</div>
                    <div className="product-price">8€</div>
                    <div className="product-button">Agregar</div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Shop;