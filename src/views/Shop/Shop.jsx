import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotdog, faGlassWhiskey, faUtensils, faIceCream } from '@fortawesome/free-solid-svg-icons';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import Desssert from '../Shop/Desserts/Dessert';
import Drink from '../Shop/Drinks/Drink';
import MainCourse from '../Shop/MainCourses/MainCourse';
import Starter from '../Shop/Starters/Starter';
import Menu from '../Shop/Menu/Menu';

const Shop = () => {
    return (
        <div id="shop">
            <Header />
            <div className="shop-component">
                <div className="shop-panel">
                    <div className="button-panel">
                        <Link to="/shop/starters">
                            <FontAwesomeIcon icon={faHotdog} />
                            <em className="link">Entrantes</em>
                        </Link>
                    </div>
                    <div className="button-panel">
                        <Link to="/shop/mainCourses">
                            <FontAwesomeIcon icon={faUtensils} />
                            <em className="link">Patos</em>
                        </Link>
                    </div>
                    <div className="button-panel">
                        <Link to="/shop/desserts">
                            <FontAwesomeIcon icon={faIceCream} />
                            <em className="link">Postres</em>
                        </Link>
                    </div>
                    <div className="button-panel">
                        <Link to="/shop/drinks">
                            <FontAwesomeIcon icon={faGlassWhiskey} />
                            <em className="link">Bebidas</em>
                        </Link>
                    </div>
                    <div className="button-panel">
                        <Link to="/shop/menu">
                            <FontAwesomeIcon icon={faUtensils} />
                            <em className="link">Menús</em>
                        </Link>
                    </div>
                </div>
                <div className="shop-content">
                    <Switch>
                        <Route path="/shop/starters" exact component={Starter} />
                        <Route path="/shop/mainCourses" exact component={MainCourse} />
                        <Route path="/shop/desserts" exact component={Desssert} />
                        <Route path="/shop/drinks" exact component={Drink} />
                        <Route path="/shop/menu" exact component={Menu} />
                    </Switch>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Shop;