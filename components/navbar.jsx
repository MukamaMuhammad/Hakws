"use client";
import React from "react";
import Image from "next/image";
import logo from "@public/logo2.jpg";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";
import { useState } from "react";

const links = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Services", url: "/services" },
  { id: 4, name: "Portfolio", url: "/portfolio" },
  { id: 5, name: "Contact", url: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="md:px-10 px-3 absolute top-0 left-0 right-0 z-[10] shadow-sm">
      <div className="container mx-auto flex md:flex-row justify-between items-center h-24">
        <Link href={"/"}>
          <div className="flex justify-center items-center">
            <Image
              className="h-[80px] max-md:h-[60px] rounded w-full object-cover object-center"
              src={logo}
              alt="logo"
            />
          </div>
        </Link>
        <button
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          {!open ? (
            <CiMenuFries className="text-4xl block md:hidden" />
          ) : (
            <VscClose className="text-4xl block md:hidden" />
          )}
        </button>

        <div className="gap-7 hidden md:flex">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-gray-800 hover:text-primary hover:font-medium transition flex flex-col"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/*Mobile navigation*/}
      {open && (
        <div className="container mx-auto pt-10 bg-white gap-7 md:hidden flex flex-col">
          {links.map((link, index) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={() => {
                setOpen((prev) => !prev);
              }}
              className="text-gray-800 hover:text-primary transition border-b-[1px] border-slate-700 pb-3"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
