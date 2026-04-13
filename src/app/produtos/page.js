'use client'
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";

export default function Produtos() {
    const { products, loading, error } = useProducts(50);

    return (
        <div className="min-h-screen mt-18 md:mt-24 mx-6 md:mx-16">

            <div className="mb-8">
                <h2 className="text-xl font-medium text-gray-600 py-6">Produtos</h2>

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