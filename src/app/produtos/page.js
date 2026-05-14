'use client'
import { useState, useEffect } from "react";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";
import { BsSearch } from "react-icons/bs";
import { FaAnglesLeft } from "react-icons/fa6";

export default function Produtos() {
    const { products, searchProducts, loading, error } = useProducts(100);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 24;
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentProducts = products.slice(start, end);
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentPage]);

    return (
        <div className="min-h-screen mt-18 md:mt-22 mx-6 md:mx-16">

            <div className="mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

                    <div>
                        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
                            Explore nossos produtos
                        </h1>

                        <p className="text-gray-500 text-sm mt-1">
                            Navegue, filtre e encontre produtos rapidamente
                        </p>
                    </div>

                    <div className="flex sm:flex-row mt-4 gap-3">
                        <input
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Buscar produto..."
                            className="border border-gray-300 rounded-md px-4 py-3 w-full sm:w-120 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
                        />

                        <button onClick={() => searchProducts(search)} className="bg-amber-500 text-white rounded-md px-6 py-3 cursor-pointer" disabled={loading}>
                            <BsSearch className="text-xl" />
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="animate-pulse">

                                <div className="rounded-xl">
                                    <div className="w-full h-40 bg-gray-300 rounded-md"></div>
                                </div>

                                <div className="mt-3 space-y-2">
                                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>

                                    <div className="space-y-1">
                                        <div className="h-2 bg-gray-300 rounded w-full"></div>
                                        <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                                    </div>
                                </div>

                                <div className="h-4 bg-gray-300 rounded w-1/3 mt-2"></div>
                            </div>
                        ))}
                    </div>
                ) : error ? (
                    <p className="text-center text-red-600 p-3 mt-10">
                        {error}
                    </p>
                ) : products?.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                        {currentProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center mt-20">
                        Nenhum produto encontrado.
                    </p>
                )}
            </div>

            <div className="flex items-center justify-center gap-2 mt-10 mb-14">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-3 border rounded-md disabled:opacity-50"
                >
                    <FaAnglesLeft />
                </button>

                {pages.map(page => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-md border ${currentPage === page
                            ? "bg-amber-500 text-white"
                            : "hover:bg-gray-100"
                            }`}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-3 border rounded-md disabled:opacity-50"
                >
                    <FaAnglesLeft className="rotate-180" />
                </button>
            </div>
        </div>
    )
}