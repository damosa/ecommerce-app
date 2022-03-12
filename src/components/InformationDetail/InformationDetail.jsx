import React from 'react'
import { Col, Row } from 'reactstrap';
import { ButtonStyled } from '../ProductItem/styles';

const InformationDetail = ({id, title, price, description}) => {
    return (
        <Col md="7">
            <Row>
                <Col md="12">
                    <h3 className="mb-4 mt-5">{title}</h3>
                    <h4 className="mb-4"><span className="mr-1"><strong>{`$ ${price}`}</strong></span></h4>
                    <div dangerouslySetInnerHTML={{__html: description || 'Not avaliable description'}} ></div>
                    <ButtonStyled color="danger" onClick={() => {}}>
                        <i className="fas fa-shopping-cart pr-2"></i>Agregar al carrito</ButtonStyled>
                </Col>
            </Row>
        </Col>
    )
}

export default InformationDetail