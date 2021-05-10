import React from 'react';
import {Spinner } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Blog = () => {

    return (
        <div id="blog">
            <Header/>
            <div className="blog-content">
                <div className="content-message">
                    <div className="message-title">
                        <p>En</p> 
                        <p>construcción</p>
                    </div>
                    <div className="message-subtitle">
                        <p>EL SITIO ESTARA LISTO PRONTO</p>
                    </div>
                    <div className="message-spinner">
                        <Spinner size="m" color="primary" />{' '}
                        <Spinner size="m" color="warning" />
                        <Spinner size="m" color="success" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Blog;