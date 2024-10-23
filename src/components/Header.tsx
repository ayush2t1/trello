import React from "react";
import Image from "next/image";
import logo from "../../public/trello.webp";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex items-center justify-between bg-red-200 px-10">
      <Link href={"/"}>
        <Image
          src={logo}
          alt="logo"
          height={30}
          width={100}
          className="h-[50px]"
        />
      </Link>
      <div className="flex items-center gap-3">
        <form action="">
          <input placeholder="Search" className="p-1 rounded-md"></input>
        </form>
        <div className="text-white flex items-center justify-center rounded-full bg-blue-600 w-[35px] h-[35px] font-semibold text-sm">
          AS
        </div>
      </div>
    </nav>
  );
};

export default Header;
