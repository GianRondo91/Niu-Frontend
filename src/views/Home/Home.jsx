import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import Menu from '../Menu/Menu';
import Gallery from '../Gallery/Gallery';
import Team from '../Team/Team';
import Contact from '../Contact/Contact';

const Home = () => {

    return (
        <div className='body'>
            <Header />
            <div className="home-content">
                <div className="home-header-picture">
                    <div className="home-picture first-picture"></div>
                    <div className="home-picture second-picture"></div>
                    <div className="home-picture third-picture"></div>
                </div>

                <div className="home-body-presentation">
                    <div className="picture-presentation"></div>
                    <div className="title-presentation">
                        COCINA INTERNACIONAL CAMBIANTE
                    </div>
                </div>

                <Menu />
                <Gallery />
                <Team />
                <Contact />

                <div className="home-footer-hour">
                    <div className="hour-circle">
                        <div className="hour-content">
                            <div className="hour-icon">
                                <FontAwesomeIcon icon={faClock} />
                            </div>
                            <div className="hour-title">Servicios</div>
                            <div className="hour-slash">|</div>
                            <div className="hour-days">
                                <p>12:00 - 16:00</p>
                                <p className="and">y</p>
                                <p>20:00 - 23:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Home;