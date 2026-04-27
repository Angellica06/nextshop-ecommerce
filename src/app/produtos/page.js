'use client'
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";

export default function Produtos() {
    const { products, loading, error } = useProducts(50);

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

                    <input
                        className="border border-gray-300 rounded-3xl w-full md:w-120 py-2 px-4 
    focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
                        type="search"
                        placeholder="Buscar produto..."
                    />
                </div>

                {error && (
                    <p className="text-center text-red-600 p-3 mt-10">{error}</p>
                )}

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
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products?.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}