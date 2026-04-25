"use client";
import Link from "next/link";
import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { FaXmark, FaBars } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-gray-50 fixed top-0 left-0 w-full font-sans font-medium px-4 shadow z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 md:px-16">
        <h1 className="font-bold text-xl md:text-2xl text-gray-700">
          Next<span className="text-[#FF7919]">Shop</span>
        </h1>

        {/* Menu desktop */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex space-x-6">
            <li className="text-gray-600">
              <Link href="/">Home</Link>
            </li>
            <li className="text-gray-600">
              <Link href="/produtos">Produtos</Link>
            </li>
            <li className="text-gray-600">
              <Link href="/ajuda">Ajuda</Link>
            </li>
          </ul>

          {/* Botão mobile */}
          <button
            className="md:hidden text-[#FF7919] text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center shadow-lg w-full pt-4 pb-5 pe-8">
          <li className="text-gray-600">
            <Link href="/" onClick={closeMenu}>Home</Link>
          </li>
          <li className="text-gray-600">
            <Link href="/produtos" onClick={closeMenu}>Produtos</Link>
          </li>
          <li className="text-gray-600">
            <Link href="/ajuda" onClick={closeMenu}>Ajuda</Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;
