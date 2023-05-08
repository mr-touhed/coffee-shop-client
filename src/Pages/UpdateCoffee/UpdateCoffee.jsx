import Forms from "../../components/Forms";

const UpdateCoffee = () => {
    const updateCoffee = (e) =>{
        e.preventDefault()
        const from = e.target;
        const name = from.name.value;
        const Chef = from.Chef.value;
        const Supplier = from.Supplier.value;
        const Taste = from.Taste.value;
        const Category = from.Category.value;
        const Details = from.Details.value;
        const Photo = from.Photo.value
        const UpdateCoffee = {name,Chef,Supplier,Taste,Category,Details,Photo};
       console.log(UpdateCoffee);
    }
    return (
        <div className="form-container md:w-1/2 mx-auto p-9">
            <h2 className="text-2xl mb-4 text-center">Update Existing Coffee Details</h2>
            <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
        <Forms  
        onSubmit={updateCoffee}
        //  name={name} 
        //  Chef={Chef} 
        //  Supplier={Supplier} 
        //  Taste={Taste} 
        //  Category={Category}
        //   Details={Details}
        //   Photo={Photo}
        />
 </div>
    );
};

export default UpdateCoffee;