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
import { FiSun } from "react-icons/fi";
import { IoMoonSharp } from "react-icons/io5";

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

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    const currentTheme = document
      .querySelector("html")
      .getAttribute("data-theme");

    if(currentTheme =='light'){
        document.documentElement.setAttribute("data-theme", 'dark')
        setNightMode(true)
    }
    if(currentTheme =='dark'){
        document.documentElement.setAttribute("data-theme", 'light')
        setNightMode(false)
    }
  };

  return (
    <header className={`${nightMode ? 'bg-slate-900' : 'bg-[#2876a3]' }`}>
      <nav className={`px-5 py-3 flex  ${nightMode ? 'bg-slate-900' : 'bg-[#2876a3]' } relative text-white items-center justify-between`}>
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
            <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <div>
                <div className="flex items-center justify-between">
                  <Image
                    src="/assets/user1.jpg"
                    width={80}
                    height={80}
                    alt=""
                    className="rounded-full"
                  />
                  <div  className="">
                    <label className="swap swap-rotate">
                      {/* this hidden checkbox controls the state */}
                      <input
                      onClick={toggleTheme}
                        type="checkbox"
                        className="theme-controller"
                        value="synthwave"
                      />

                      {/* sun icon */}
                      <svg
                        className="swap-off h-7 w-7 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                      </svg>

                      {/* moon icon */}
                      <svg
                        className="swap-on h-7 w-7 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                      </svg>
                    </label>
                  </div>
                </div>

                <div
                  onClick={handleEmoji}
                  className="flex justify-between border-b-2 pb-2 items-center"
                >
                  <div>
                    <h3 className={`text-xl ${nightMode ? 'text-white' : 'text-black'} font-medium`}>
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
                  className={`text-lg flex items-center gap-x-6 py-3 border-b-2 transition-all duration-300 ${
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
          <thead className={`text-base  font-normal ${nightMode ? 'bg-slate-900' : 'bg-[#2876a3]' }`}>
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
