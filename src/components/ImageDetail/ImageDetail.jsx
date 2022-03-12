import React from 'react'
import { Col, Row } from 'reactstrap';

const ImageDetail = ({image}) => {
    return (
        <Col md="5">
            <Row>
                <Col md="12">
                    <img src={image}
                        alt="detail product"
                        className="img-fluid"
                        style={{ transformOrigin: 'center center', transform: 'scale(1)' }} />
                </Col>
            </Row>
        </Col>
    )
}

export default ImageDetail