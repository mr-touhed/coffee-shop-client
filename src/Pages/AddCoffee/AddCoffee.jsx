import { Link } from "react-router-dom";
import Forms from "../../components/Forms";
import Swal from 'sweetalert2'

const AddCoffee = () => {
    
    const addCoffie = (e) =>{
        e.preventDefault()
        const from = e.target;
        const name = from.name.value;
        const Chef = from.Chef.value;
        const Supplier = from.Supplier.value;
        const Taste = from.Taste.value;
        const Category = from.Category.value;
        const Details = from.Details.value;
        const Photo = from.Photo.value
        const newCoffee = {name,Chef,Supplier,Taste,Category,Details,Photo};
       console.log(newCoffee);

       fetch('http://localhost:5000/coffees',{
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(newCoffee)
       })
       .then(res => res.json())
       .then(data => {
        if(data.acknowledged){
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Add your New Coffee SuccessFully',
                showConfirmButton: false,
                timer: 1500
              })
              from.reset()
        }
       })
    }
    return (
        <div className="mt-6">
            <Link to="/" className="text-lg font-semibold border p-1 ml-8 rounded-lg text-slate-500">Back to Home</Link>
            <div className="form-container md:w-1/2 mx-auto">
                   <Forms onSubmit={addCoffie} />
            </div>
        </div>
    );
};

export default AddCoffee;