"user client"
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-6 md:mx-16">
      <div className="grid grid-cols lg:grid-cols-2 justify-items-center items-center bg-linear-to-b from-[#ffce51] to-[#FFF1B5] min-h-[60vh] my-6 rounded-xl mt-24 p-8 md:p-16">
        <div>
          <p className="text-yellow-700">Oferta por tempo limitado: 30% de desconto</p>
          <h2 className="text-[2.4rem] font-bold text-gray-700">Experimente o som puro - seus fones de ouvido perfeitos estão à sua espera!</h2>
          <div className="flex gap-3 mt-3">
            <button className="bg-amber-500 text-white py-3 px-6 rounded-3xl">Buy Now</button>
            <button className="border border-gray-600 text-gray-600 py-3 px-5 rounded-3xl">Mais details</button>
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <div className="flex justify-center my-10">
          <button className="border py-2 px-5 rounded-md ">Ver Mais</button>
        </div>
      </div>

      <div className="bg-amber-100 rounded-xl p-8 mt-10 text-center">
        <h3 className="text-2xl font-bold">
          Até 30% OFF em produtos selecionados
        </h3>

        <p className="text-gray-600 mt-2">
          Aproveite as ofertas por tempo limitado
        </p>

        <button className="mt-4 bg-amber-500 text-white px-6 py-2 rounded-full">
          Comprar agora
        </button>
      </div>

      <div className="p-8 my-10 text-center">
        <h3 className="text-3xl font-bold text-gray-700">
          Receba ofertas exclusivas
        </h3>

        <p className="text-gray-600 mt-2">
          Inscreva-se e receba promoções e novidades direto no seu email
        </p>

        <div className="flex flex-col sm:flex-row justify-center mt-4 gap-3">
          <input
            type="email"
            placeholder="Digite seu email"
            className="border border-gray-300 rounded-md px-4 py-3 w-full sm:w-90 focus:outline-none"
          />

          <button className="bg-amber-500 text-white rounded-md px-6 py-3">
            Inscreva-se
          </button>
        </div>
      </div>
    </div>
  );
}
