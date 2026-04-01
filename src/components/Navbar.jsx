"use client";
import Link from "next/link";
import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { FaXmark, FaBars } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-gray-50 fixed top-0 left-0 w-full font-sans font-medium shadow">
      <nav className="container mx-auto flex justify-around items-center py-4">
        <h1 className="font-bold text-2xl text-gray-700">
          Next<span className="text-[#FF7919]">Shop</span>
        </h1>

        <input
          className="border border-gray-300 rounded-3xl w-50 sm:w-56 md:w-74 lg:w-100 py-2 px-3 
          focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
          type="search"
          placeholder="Buscar produto..."
        />

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

          {/* Carrinho */}
          <div className="relative">
            <BsCart2 className="text-xl text-gray-600" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </div>

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
