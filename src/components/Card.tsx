import { useState } from "react";

export default function Card(props: object) {
    const { image, title, price, description, rating } = props
    const [selected, setSelected] = useState(false);
    const onAdd = () => {
        setSelected(!selected);
    };

    return (
        <div className="w-52 bg-gray-300 rounded m-2 p-2">
            <img src={image} alt="products" />
            <h6>{title}</h6>
            <p>${price}</p>
            <p>{description}</p>
            <div>{rating.rate} &#9650;</div>

            <button className={selected ? "selected" : ""} onClick={onAdd}>
                {selected ? "selected" : "Add to Cart"}
            </button>
        </div>
    )
}
