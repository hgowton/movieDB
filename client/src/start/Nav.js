import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from './Grid';

function Nav () {
    return(
        <nav className="navbar">
            <Row>
                <Col size="md-3">
                    <Link to='/' ><i className="fas fa-home"></i> Home</Link>
                </Col>
                <Col size="md-3">
                    <Link to='/search'><i className="fas fa-search"></i> Search</Link>
                </Col>
                <Col size="md-3">
                    <i className="fas fa-save"></i> Saved
                </Col>
                <Col size="md-3">
                    <i className="fas fa-heart"></i> Favs
                </Col>
            </Row>
        </nav>
    )
}

export default Nav;