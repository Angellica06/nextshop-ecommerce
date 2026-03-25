import Image from "next/image";
import { IoStar } from "react-icons/io5";

function ProductCard() {
  const product = {
    title: "Fone Base",
    description: "O Fone é poderoso e ideal para desenvolvimento..",
    price: "299,99",
    image: "/images/produto.png",
    rating: 4.8,
  };

  return (
    <div className="">
      <div className="bg-[#F0F1F2] p-6 rounded-xl">
        <Image
          className=""
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
        />
      </div>

      <div className="mt-3">
        <span className="text-[1.1rem] font-medium text-gray-700">
          {product.title}
        </span>

        <p className="text-[.8rem] text-gray-500">
          {product.description.slice(0, 60)}...
        </p>

        <p className="flex items-center gap-2">
          {product.rating}{" "}
          {[...Array(5)].map((_, index) => (
            <IoStar className="text-amber-300" key={index} />
          ))}
        </p>
      </div>

      <div className="font-semibold mt-2">R$ {product.price}</div>
    </div>
  );
}

export default ProductCard;
