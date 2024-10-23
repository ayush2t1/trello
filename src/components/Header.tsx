import React from "react";
import Image from "next/image";
import logo from "../../public/Trello_logo.svg.png";
import Link from "next/link";
import { Search, User } from "lucide-react";

const Header = () => {
  return (
    <nav className="flex flex-col gap-5">
      <div className="flex items-center justify-between bg-gray-300 px-10 py-3 rounded-b-2xl">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo"
            height={50}
            width={160}
            className="h-[45px]"
          />
        </Link>
        <div className="flex items-center gap-3">
          <form
            action=""
            className="flex items-center gap-1 bg-white p-1 rounded-md"
          >
            <Search className="text-gray-400 " />
            <input placeholder="Search" className="outline-none" />
            <button hidden type="submit">
              Search
            </button>
          </form>
          <div className="text-white flex items-center justify-center rounded-full bg-blue-600 w-[35px] h-[35px] font-semibold text-sm">
            AS
          </div>
        </div>
      </div>
      <div>
        <p className="flex items-center gap-1 rounded-full px-3 py-2 shadow-md italic text-blue-600 font-semibold text-sm w-fit">
          <span className="rounded-full p-1 w-fit  bg-blue-600 text-white ">
            <User />
          </span>
          <span> GPT is summarizing your tasks for the day...</span>
        </p>
      </div>
    </nav>
  );
};

export default Header;
