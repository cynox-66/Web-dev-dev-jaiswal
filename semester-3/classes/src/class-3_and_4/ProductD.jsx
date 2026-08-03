import react from 'react'
import { useParams } from 'react-router-dom';
import { ProductContext } from './ProductContext';
import { useContext } from 'react';

const ProductD = () => {
    let { id } = useParams()
    const products = useContext(ProductContext);

    let data = products.find((a) => a.id === Number(id));

    if (!data) {
        return <h2>Product Not Found</h2>
    }


    return (
        <div>
            <ol>
                <li>{data.name}</li>
                <li>{data.price}</li>
            </ol>
        </div>
    )

}

export default ProductD