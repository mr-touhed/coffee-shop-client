
import InputField from './InputField';

const Forms = (props) => {
    const {name,Chef,Supplier,Taste,Category,Details,Photo} = props;
    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(event); // Call the submit function passed as a prop
      }
    return (
        <form className="p-8 space-y-3" onSubmit={handleFormSubmit}>
                        <div className="flex gap-3 w-full">
                            <InputField name="name" className="w-full" defaultValue={name}/>
                            <InputField name="Chef" className="w-full" defaultValue={Chef}/>
                        </div>
                        <div className="flex gap-3 w-full">
                            <InputField name="Supplier" className="w-full" defaultValue={Supplier}/>
                            <InputField name="Taste" className="w-full" defaultValue={Taste}/>
                        </div>
                        <div className="flex gap-3 w-full">
                            <InputField name="Category" className="w-full" defaultValue={Category}/>
                            <InputField name="Details" className="w-full" defaultValue={Details}/>
                        </div>
                        <InputField name="Photo" className="w-full" defaultValue={Photo}/>
                        <input type="submit" value="Add Coffee" className="btn add-btn w-full mt-8 p-2 rounded-sm text-white" />
                    </form>
    );
};

export default Forms;