'use client'
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { IoMenu, IoSearch } from "react-icons/io5";



const Navbar = () => {
    const {id} = useParams()
    const [showbar,setShowbar] = useState(false)
    const handleShowSidebar = () => {
        setShowbar(!showbar)
    }
    return (
        <header className="bg-[#2876a3]">
            <nav className="px-5 py-3 flex bg-[#2876a3] relative text-white items-center justify-between">
            <div className="flex items-center">
            <label htmlFor="my-drawer">
            <IoMenu onClick={handleShowSidebar} className="text-3xl "/>
            </label>
            <h3 className="font-medium text-xl ml-8">Telegram</h3>
            </div>
            <div className="">
                <IoSearch className="text-2xl"/>
            </div>
        </nav>
            <div className={`fixed  h-screen transition-all duration-500 z-40 top-0 ${showbar ? 'left-0' :'-left-96'}`}>
            <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
     
    </div>
  </div>
</div>
            </div>
        <div className={` overflow-x-scroll ${id == undefined || 'hidden'}`}>
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