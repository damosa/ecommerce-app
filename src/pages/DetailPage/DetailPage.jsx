import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { getDetailProducts } from '../../apis/products';
import DetailSection from '../../components/DetailSection/DetailSection';
import ImageDetail from './../../components/ImageDetail/ImageDetail';
import InformationDetail from './../../components/InformationDetail/InformationDetail';

export const DetailPage = (props) => {
    const {itemId} = useParams();
    const [product, setProduct] = useState(undefined);
    
    useEffect(() => {
        getDetailProducts(itemId)
        .then(response => setProduct(response.data))
        .catch(error => console.log('error', error));
    }, [itemId]);

    if(!product) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="mt-5">
            <Row>
                <Col ms="12">
                    <h1>Detalle producto</h1>
                </Col>
            </Row>
            <DetailSection>
                <ImageDetail image={product.imageLargeUrl}/>
                <InformationDetail id={product.id}
                    title={product.name}
                    price={product.price}
                    description={product.description}
                />
            </DetailSection>
        </div>
    )
}

export default DetailPage;