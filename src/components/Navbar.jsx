"use client";
import Image from "next/image";
import Link from "next/link";
import { BsCart2 } from "react-icons/bs";

function Navbar() {
  return (
    <div className="bg-gray-50 p-4 shadow flex justify-around fixed top-0 w-full">
      <h1 className="text-gray-700 text-2xl font-medium flex">
        <Image
          src={"/images/logo.png"}
          alt="Logo"
          width={34}
          height={34}
          priority
        />
        Next<span className="text-[#FF7919]">Shop</span>
      </h1>

      <div className="flex gap-3">
        <input
          className="border border-gray-300 rounded-md w-40 sm:w-56 md:w-72 lg:w-96 py-1 px-3"
          type="search"
          placeholder="Pesquise por produto..."
        />
      </div>

      <div className="flex gap-3 items-center">
        <ul className="flex gap-3">
          <li className="text-gray-600">
            <Link href="/">Home</Link>
          </li>
          <li className="text-gray-600">
            <Link href="/produtos">Produtos</Link>
          </li>
          <li className="text-gray-600">
            <Link href="/contato">Contato</Link>
          </li>
        </ul>

        <div>
          <BsCart2 className="text-xl text-gray-600" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
