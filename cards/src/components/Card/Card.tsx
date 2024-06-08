import { Product } from "../Cards"

type CardProps = {
    product: Product
}

export default function Card({ product }: CardProps): JSX.Element {
    return (
        <div className="card">
            <div className="front">
                <img src={product.image}
                    alt="" className="image" />
                <p className="name">
                    {product.name}
                </p>
            </div>
            <div className="back">
                <div>Id</div>
                <div>{product.id}</div>
                <div>Price</div>
                <div className="price">
                    <span className="regular-price">
                        {product.regular_price}
                    </span>
                    &nbsp;
                    <span className="sale-price">
                        {product.sale_price}
                    </span>
                </div>
                <div>Brand</div>
                <div>{product.brand_name}</div>
                <div>Pack</div>
                <div>{product.pack}</div>
                <div>URL</div>
                <div>
                    <a href={product.url}
                        target="_blank" rel="noreferrer">
                        {product.url}
                    </a>
                </div>
            </div>
        </div>
    );
}