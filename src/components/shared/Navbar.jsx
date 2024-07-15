"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMenu, IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { CiBullhorn } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { id } = useParams();
  const pathName = usePathname();

  const [showAdd, setShowAdd] = useState(false);
  const [showbar, setShowbar] = useState(false);
  const [nightMode, setNightMode] = useState(false);
  const handleShowSidebar = () => {
    setShowbar(!showbar);
  };
  const handleEmoji = () => {
    setShowAdd(!showAdd);
  };
  const handleMode = () => {
    setNightMode(!nightMode);
  };

  

  return (
    <header className='dark:bg-slate-900 bg-[#2876a3]'>
      <nav className={`px-5 py-3 flex dark:bg-slate-900 bg-[#2876a3] relative text-white items-center justify-between`}>
        <div className="flex items-center">
          <label htmlFor="my-drawer">
            <IoMenu onClick={handleShowSidebar} className="text-3xl " />
          </label>
          <h3 className="font-medium text-xl ml-8">Telegram</h3>
        </div>
        <div className="">
          <IoSearch className="text-2xl" />
        </div>
      </nav>
      <div
        className={`fixed  h-screen transition-all duration-500 z-40 top-0 ${
          showbar ? "left-0" : "-left-96"
        }`}
      >
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="menu bg-base-200 dark:bg-slate-900 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <div className="dark:text-slate-100">
                <div className="flex items-center justify-between">
                  <Image
                    src="/assets/user1.jpg"
                    width={80}
                    height={80}
                    alt=""
                    className="rounded-full"
                  />
                  <div>
                    <ThemeToggle/>
                  </div>
                </div>

                <div
                  onClick={handleEmoji}
                  className="flex justify-between dark:border-b-slate-500 border-b-2 pb-2 items-center"
                >
                  <div>
                    <h3 className={`text-xl dark:text-white  text-black font-medium`}>
                      Amdadul Haque
                    </h3>
                    <p className="text-base text-blue-500 font-light">
                      Set Emoji Status
                    </p>
                  </div>
                  <div>
                    <MdKeyboardArrowDown
                      className={`text-2xl transition-all ${
                        showAdd ? "-rotate-180" : "-rotate-0"
                      } duration-500`}
                    />
                  </div>
                </div>
                <p
                  className={`text-lg flex items-center dark:bg-slate-900 dark:text-slate-100 dark:border-b-slate-500 gap-x-6 py-3 border-b-2 transition-all duration-300 ${
                    showAdd ? "block" : "hidden"
                  }`}
                >
                  <IoAddCircle className="text-blue-500 text-3xl" />
                  Add Account
                </p>
                <p className="flex items-center gap-x-2 py-3 hover:bg-slate-200 px-4">
                  <FiUsers className="text-xl" /> New Group
                </p>
                <p className="flex items-center gap-x-2 py-3 hover:bg-slate-200 px-4">
                  {" "}
                  <CiBullhorn className="text-xl" /> New Channel
                </p>
                <p className="flex items-center gap-x-2 py-3 hover:bg-slate-200 px-4">
                  <IoMdContact className="text-xl" />
                  Contact
                </p>
                <p className="flex items-center gap-x-2 py-3 hover:bg-slate-200 px-4">
                  <IoCallOutline className="text-xl" />
                  Calls
                </p>
                <p className="flex items-center gap-x-2 py-3 hover:bg-slate-200 px-4">
                  <IoSettingsOutline className="text-xl" />
                  Setting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`overflow-x-scroll ${id == undefined || "hidden"}`}>
        <table>
          <thead className={`text-base  font-normal dark:bg-slate-900 bg-[#2876a3] `}>
            <tr className="text-white font-normal">
              <td
                className={`px-5 py-3 ${
                  pathName === "/all" && "border-b-8 border-blue-500"
                }`}
              >
                <Link href="/all">All</Link>
              </td>
              <td
                className={`px-5 py-3 ${
                  pathName === "/regular" && "border-b-8 border-blue-500"
                }`}
              >
                <Link href="/regular">Regular</Link>
              </td>
              <td
                className={`px-5 py-3 ${
                  pathName === "/unread" && "border-b-8 border-blue-500"
                }`}
              >
                <Link href="/unread">Unread</Link>
              </td>
              <td
                className={`px-5 py-3 ${
                  pathName === "/personal" && "border-b-8 border-blue-500"
                }`}
              >
                <Link href="/personal">Personal</Link>
              </td>
              <td
                className={`px-5 py-3 ${
                  pathName === "/group" && "border-b-8 border-blue-500"
                }`}
              >
                <Link href="/group">Group</Link>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </header>
  );
};

export default Navbar;
