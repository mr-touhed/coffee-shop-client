import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header/Header";
import CoffeeCard from "../components/CoffeeCard";
import { useState } from "react";

const Home = () => {
    const loaderData = useLoaderData()
    const [coffees,setCoffees] = useState(loaderData)

    const removeOne = (id) =>{
        const remaining = coffees.filter(coffee => coffee._id !== id)
        setCoffees(remaining)
        
    }
    return (
        <div>
            <Header/>
            <div className="mt-40">
                <div className="text-center">
                <p>--- Sip & Savor ---</p>
                <h2 className="text-3xl mb-6">Our Popular Products</h2>
                <Link to="/addnewcoffee" ><button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Add Coffee
  </span>
</button></Link>
                </div>

            <div className="grid grid-cols-2 container mx-auto gap-6 p-24">
            
            {
                coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} removeOne={removeOne}/>)
            }
            </div>

            </div>
        </div>
    );
};

export default Home;