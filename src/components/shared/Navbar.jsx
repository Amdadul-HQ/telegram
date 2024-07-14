'use client'
import Link from "next/link";
import { useParams } from "next/navigation";
import { IoMenu, IoSearch } from "react-icons/io5";



const Navbar = () => {
    const {id} = useParams()
    
    return (
        <header className="bg-[#2876a3]">
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
        <div className={`max-w-[375px] overflow-x-scroll ${id == undefined || 'hidden'}`}>
            <table> 
                <thead className="text-base font-normal">
                    <tr className="text-white font-normal">
                    <td className="px-5 py-3 border-b-4 border-blue-500"><Link href='/all'>
                        All
                        </Link></td>
                        <td className="px-5 py-3">
                        <Link href='/regular'>
                        Regular
                        </Link></td>
                        <td className="px-5 py-3">
                        <Link href="/unread">
                        Unread
                        </Link></td>
                        <td className="px-5 py-3">
                        <Link href='/personal'>
                        Personal
                        </Link></td>
                        <td className="px-5 py-3">
                        <Link href='/group'>
                        Group
                        </Link></td>
                    </tr>
                </thead>
            </table>
        </div>
        </header>
    );
};

export default Navbar;