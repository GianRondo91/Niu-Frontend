import React from 'react';

const Cart = () => {

    return (
        <div className="Cart">
            <div className="ticket">
                <div className="ticket-info">
                    <div className="info-lef">
                        <div className="number-order">Numero de Pedido: 5151515151</div>
                        <div className="takeaway">Método: Retirar en el local</div>
                    </div>
                    <div className="info-right">
                        <div className="date">Fecha de pedido: 5 de mayo 2021</div>
                    </div>
                </div>

                <div className="ticket-orders">
                    <div className="ticket-order">
                        <div className="image-product"></div>
                        <div className="name-product"></div>
                        <div className="count"></div>
                        <div className="price-counts"></div>
                    </div>
                </div>

                <div className="ticket-buttons">
                    <div className="subtotal">Total <em>5€</em></div>
                    <div className="cancel">Cancelar Orden</div>
                    <div className="code-generate">Generar código del Pedido</div>
                </div>
            </div>
        </div>
    )
};

export default Cart;