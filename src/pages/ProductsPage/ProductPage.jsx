import React, { useEffect, useState } from 'react'
import { getProducts } from './../../apis/products';

const ProductPage = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        getProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log('error', error))
    }, []);

    return (
        <div>
            {products?.map(product => {
                return(<p>{product.attributes.name}</p>);
                })
            }
        </div>
    )
}

export default ProductPage