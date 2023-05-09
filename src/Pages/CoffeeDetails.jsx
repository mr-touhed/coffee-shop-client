import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
    const coffee = useLoaderData()
    const {name,Chef,Supplier,Taste,Details,Photo,} = coffee;
    return (
        <div className="text-center space-y-4">
            <Link to="/">Back to home</Link>
            <img src={Photo} alt="" className="w-1/4 mx-auto"/>
            <h2 className="text-3xl">{name}</h2>
            <p>{Details}</p>
            <p>Chef: {Chef}</p>
            <p>Supplier: {Supplier}</p>
            <p>Taste: {Taste}</p>
            
        </div>
    );
};

export default CoffeeDetails;