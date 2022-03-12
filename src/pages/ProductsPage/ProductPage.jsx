import React, { useEffect, useState } from 'react'
import ProductItem from '../../components/ProductItem/ProductItem';
import { getProducts } from './../../apis/products';
import { ContainerStyled } from './style';
import { useCartContext } from './../../contexts/CartContext/index';

const ProductPage = () => {
    const [products, setProducts] = useState(null);
    const {addProductToCart} = useCartContext();

    useEffect(() => {
        getProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log('error', error))
    }, []);

    if(!products) {
        return <h1>Loading...</h1>;
    }

    return (
        <ContainerStyled>
            {products?.map(product => {
                const {id, attributes: { name, price, image_medium_url } } = product;
                return(
                    <ProductItem 
                        key={id}
                        id={id}
                        title={name}
                        price={price}
                        addProductToCart={() => addProductToCart(product)}
                        image={image_medium_url}
                    />);
                })
            }
        </ContainerStyled>
    )
}

export default ProductPage