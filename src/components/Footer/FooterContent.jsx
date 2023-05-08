
import logo from "../../assets/images/more/logo1.png"

const FooterContent = () => {
    return (
        <div className='px-80 flex footer-section py-10'>
            <div className="space-y-3">
                <img src={logo} alt="" className='h-8'/>
                <h2 className='text-2xl '>Espresso Emporium</h2>
                <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                <div>
                    socal icon
                </div>
                <h2 className='text-2xl'>Get in Touch</h2>
                <ul className="space-y-3">
                    <li>+88 01533 333 333</li>
                    <li>info@gmail.com</li>
                    <li>72, Wall street, King Road, Dhaka</li>
                </ul>
            </div>

            <form className="space-y-5">
                    <h2 className='text-2xl'>Connect with Us</h2>
                    <input type="text" name="" id="" className="w-full"/>
                    <br/>
                    <input type="text" name="" id="" className="w-full"/>
                    <br />
                    <textarea name="" id="" cols="40" rows="5" className="w-full">

                    </textarea>
                    <br />
                    <br />
                    <input type="submit" value="Send Message" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"/>

            </form>
        </div>
    );
};

export default FooterContent;