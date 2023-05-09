import { EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const CoffeeCard = ({coffee,removeOne}) => {
    const {name,Chef,Supplier,Taste,Details,Photo,_id} = coffee;


    const removeItem = (id) =>{
        

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffees/${id}`,{
                    method: "DELETE",
        
                })
                .then(res => res.json())
                .then (result =>{
                    if(result.deletedCount > 0){
                        removeOne(id)
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })



              
            }
          })


       
        
    }



    return (
       
<div  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={Photo} alt="" />
    <div className="flex flex-row justify-between  items-center p-4 leading-normal">
        <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Chef: {Chef}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Supplier: {Supplier}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Taste: {Taste}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{Details}</p>
        </div>
        <div className='space-y-8 ml-6'>
            <div className='w-8 h-8 bg-[#D2B48C] flex justify-center items-center rounded-md'>
            <EyeIcon className="h-6 w-6 text-white" />
            </div>
        <Link to={`/updateCoffee/${_id}`}
        
         className='w-8 h-8 bg-green-600 flex justify-center items-center rounded-md'>
        <PencilSquareIcon className="h-6 w-6 text-white" />
        </Link>
        <div
        onClick={() =>removeItem(_id)}
        className='w-8 h-8 bg-red-500 flex justify-center items-center rounded-md'>
        <TrashIcon className="h-6 w-6 text-white" />
        </div>
        
       
        
        </div>
    </div>
</div>

    );
};

export default CoffeeCard;