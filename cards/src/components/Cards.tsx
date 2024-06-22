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
                    // setProducts(
                    //     (data.products as Product[])
                    //         .slice(0, 4)
                    //         .map((product, index) => {
                    //             if (index === 2) { // Check if it's the 3rd product (index 2)
                    //                 return {
                    //                     ...product,
                    //                     image: "https://media.istockphoto.com/id/1672317574/photo/ama-dablam-mountain-peak.webp?b=1&s=170667a&w=0&k=20&c=Ea8yDEHpUemrRuMZUKGPDBE11YTWVksIupMN8FkEBf8="
                    //                 };
                    //             }
                    //             return product;
                    //         })
                    // )
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

