import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProducstList from './ProducstList';
import StepHeader from './StepHeader';
import './styles.css';
import { Product } from './types';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="orders-container">
            <StepHeader />
            <ProducstList products={products} />
        </div>
    )
}

export default Orders;
