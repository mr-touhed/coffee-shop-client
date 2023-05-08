import { Link } from "react-router-dom";
import image from "../../assets/images/404/404.gif"
const ErrorPage = () => {
    return (
      
         
        <div className="flex justify-center">
            <div>
            <Link to="/">Go Back</Link>
            <img src={image} alt=""  />
            </div>
            
        </div>

       
    );
};

export default ErrorPage;