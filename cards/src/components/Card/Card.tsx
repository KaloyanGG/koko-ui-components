import { Product } from "../Cards"

type CardProps = {
    product: Product
}

export default function Card({product}: CardProps): JSX.Element {
    return (
        <div className="card">
            <div className="front">
                <img src={product.image}
                    alt="" className="image" />
                <p className="name">
                    {product.name}
                </p>
                <p className="price">
                    {product.sale_price}
                </p>
            </div>
            <div className="back">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Brand name</th>
                            <th>Pack</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>35747</td>
                            <td>Kevin Levrone</td>
                            <td>2000 грама, 67 Дози</td>
                            <td>179.95</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}