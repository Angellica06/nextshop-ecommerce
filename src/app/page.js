'use client'
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import { useProducts } from "@/hooks/useProducts";
import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  const { products, loading, error } = useProducts(8);

  return (
    <div className="mx-6 md:mx-16">
      <div className="grid grid-cols lg:grid-cols-2 justify-items-center items-center bg-linear-to-b from-[#ffce51] to-[#FFF1B5] min-h-[60vh] my-6 rounded-xl mt-24 p-8 md:p-16">
        <div>
          <p className="text-yellow-700">Oferta por tempo limitado: 30% de desconto</p>
          <h2 className="text-[2.4rem] font-bold text-gray-700">Descubra os melhores produtos com qualidade e preço imperdíveis!</h2>
          <p className="text-gray-600">Produtos selecionados com qualidade, preços especiais e ofertas por tempo limitado.</p>
          <div className="flex gap-3 mt-3">
            <Button className="text-white">Compre agora</Button>
            <Button className="bg-transparent border border-gray-600 text-gray-600">Mais details</Button>
          </div>
        </div>

        <div className="">
          <Image
            src={"/images/produto.png"}
            alt="Logo"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-medium text-gray-600 py-6">Produtos Populares</h2>
        {error && (
          <p className="text-center text-red-600 p-3 mt-10">
            {error}
          </p>
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

        <div className="flex justify-center my-10">
          <Link className="border border-amber-500 text-amber-500 py-2 px-5 rounded-3xl" href="/produtos">Ver Mais</Link>
        </div>
      </div>

      <div className="bg-amber-100 rounded-xl p-8 mt-10 text-center">
        <h3 className="text-2xl font-bold">
          Até 30% OFF em produtos selecionados
        </h3>

        <p className="text-gray-600 my-3">
          Aproveite as ofertas por tempo limitado
        </p>

        <Button className="text-white">Comprar agora</Button>
      </div>

      <div className="p-8 my-14 text-center">
        <h3 className="text-3xl font-bold text-gray-700">
          Receba ofertas exclusivas
        </h3>

        <p className="text-gray-600 mt-2">
          Inscreva-se e receba promoções e novidades direto no seu email
        </p>

        <div className="flex flex-col sm:flex-row justify-center mt-4">
          <input
            type="email"
            placeholder="Digite seu email"
            className="border border-gray-300 px-4 py-3 w-full sm:w-80 
               rounded-md sm:rounded-r-none focus:outline-none"
          />

          <button
            className="bg-amber-500 text-white px-6 py-3 
               rounded-md sm:rounded-l-none mt-3 sm:mt-0"
          >
            Inscreva-se
          </button>
        </div>
      </div>
    </div>
  );
}
