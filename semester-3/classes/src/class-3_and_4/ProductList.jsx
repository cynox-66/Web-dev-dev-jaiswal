import react from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from './ProductContext';
import { useContext } from 'react';


const ProductList = ()=>{
    let navi = useNavigate();
    const products = useContext(ProductContext);

    function fun1(id){
        navi(`/products/${id}`)
    }
    return (
        <div>
            <h1>Product List</h1>
            {
                products.map((a) => {
                    return (
                        <>
                            <li onClick={() => fun1(a.id)}>{a.name}</li>
                        </>
                    )
                })
            }
        </div>
    )
}

export default ProductList