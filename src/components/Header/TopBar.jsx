import logo from "../../assets/images/more/logo1.png"

const TopBar = () => {
    return (
        <div className='h-20 top-bar flex items-center justify-center'>
            <div className="flex justify-center items-center">
                <img src={logo} alt="" className="h-12" />
            <h2 className="text-2xl text-white ml-5">Espresso Emporium</h2>

            </div>
        </div>
    );
};

export default TopBar;