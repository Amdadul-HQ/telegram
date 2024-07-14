
import { IoMenu, IoSearch } from "react-icons/io5";
import BasicTabs from "./BasicTabs";


const Navbar = () => {
    return (
        <header>
            <nav className="px-5 py-3 flex bg-[#2876a3] text-white items-center justify-between">
            <div className="flex items-center">
            <button>
            <IoMenu className="text-3xl "/>
            </button>
            <h3 className="font-medium text-xl ml-8">Telegram</h3>
            </div>
            <div className="">
                <IoSearch className="text-2xl"/>
            </div>
        </nav>
        <div>
            <BasicTabs/>
        </div>
        </header>
    );
};

export default Navbar;