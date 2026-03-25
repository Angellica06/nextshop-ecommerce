import ProductCard from "@/components/ProductCard";

export default function carrinho() {
    return (
        <div className="min-h-screen mt-24 mx-6 md:mx-16">

            <div className="mb-8">
                <h2 className="text-xl font-medium text-gray-600 py-6">Produtos</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <ProductCard />
                </div>
            </div>
        </div>
    )
}