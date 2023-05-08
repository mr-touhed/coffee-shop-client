
const InputField = ({name,className,...rest}) => {
    
    return (
        <div className="w-full">
            <label htmlFor={name} >{name}</label>
            <input type="text" name={name} id="" className={`${className} rounded-sm border-spacing-0`} {...rest} required />
        </div>
    );
};

export default InputField;