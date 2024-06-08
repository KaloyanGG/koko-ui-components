import { useEffect, useState } from 'react';
import './Cards.css';
import Card from './Card/Card';

export type Product = {
    id: string;
    brand_name: string;
    brand_id: string;
    name: string;
    pack: string;
    regular_price: string;
    sale_price: string;
    url: string;
    image: string;
};

export default function Cards(): JSX.Element {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        setTimeout(() => {
            fetch('https://offload.fitness1.bg/ajax.php?test-api-v2')
                .then(response => response.json())
                .then(data => {
                    setProducts(
                        (data.products as Product[])
                            .slice(0, 4)
                    )
                })
        }, 2000)
    }, [])

    return (
        <div className="cards-component">
            {
                products.length === 0
                    ? <p>Loading...</p>
                    : products.map(p =>
                        <Card key={p.id} product={p} />
                    )
            }

        </div>
    );
}

