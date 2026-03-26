import { Link } from "react-router-dom";

const FoodTruck = ({ truck }) => {

    const {
        id,
        name,
        daily_special,
        slogan,
        has_vegan_options,
        price_level,
        rating
    } = truck;

    return (
        <>
            <div className="card">

            <h2>{name}:</h2>
            <p>ID: {id}</p>
            <p>Daily Special: {daily_special}:</p>
            <p>Slogan: {slogan}</p>
            <p>Has Vegan Options: {has_vegan_options}</p>
            <p>Price Level: {price_level}</p>
            <p>Rating: {rating}</p>
            <button>Delete</button>
            </div>
        </>
    )
};

export default FoodTruck;