import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotdog, faGlassWhiskey, faUtensils, faIceCream } from '@fortawesome/free-solid-svg-icons';

import Desssert from './Desserts/Dessert';
import Drink from './Drinks/Drink';
import MainCourse from './MainCourses/MainCourse';
import Starter from './Starters/Starter';
import Menu from './Menu/Menu';

import { LOAD } from '../../../redux/types/productType';

const Shop = (props) => {

    const categorizeProducts = (products) => {
        let categorized = {};

        products.forEach(product => {
            if (!categorized[product.category]) {
                categorized[product.category] = [];
            };
            categorized[product.category].push(product);
        });

        return categorized;
    };

    useEffect(() => {
        const getProducts = async () => {

            let token = props.token;

            if (!token) {
                return;
            }

            let result = await axios.get(`https://niubackend.herokuapp.com/products`, { headers: { authorization: token } });

            props.dispatch({ type: LOAD, payload: categorizeProducts(result.data) });
        }
        getProducts();
    }, []);

    return (
        <div className="shop-component">
            <div className="shop-panel">
                <div className="button-panel">
                    <Link to="/user/shop/starters">
                        <FontAwesomeIcon icon={faHotdog} />
                        <em className="link">Entrantes</em>
                    </Link>
                </div>
                <div className="button-panel">
                    <Link to="/user/shop/mainCourses">
                        <FontAwesomeIcon icon={faUtensils} />
                        <em className="link">Platos</em>
                    </Link>
                </div>
                <div className="button-panel">
                    <Link to="/user/shop/desserts">
                        <FontAwesomeIcon icon={faIceCream} />
                        <em className="link">Postres</em>
                    </Link>
                </div>
                <div className="button-panel">
                    <Link to="/user/shop/drinks">
                        <FontAwesomeIcon icon={faGlassWhiskey} />
                        <em className="link">Bebidas</em>
                    </Link>
                </div>
                <div className="button-panel">
                    <Link to="/user/shop/menu">
                        <FontAwesomeIcon icon={faUtensils} />
                        <em className="link">Menús</em>
                    </Link>
                </div>
            </div>
            <div className="shop-content">
                <Switch>
                    <Route path="/user/shop/starters" exact component={Starter} />
                    <Route path="/user/shop/mainCourses" exact component={MainCourse} />
                    <Route path="/user/shop/desserts" exact component={Desssert} />
                    <Route path="/user/shop/drinks" exact component={Drink} />
                    <Route path="/user/shop/menu" exact component={Menu} />
                </Switch>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        userId: state.userReducer.userId,
        token: state.userReducer.token
    }
};

export default connect(mapStateToProps)(Shop);