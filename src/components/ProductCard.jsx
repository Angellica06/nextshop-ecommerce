import Image from "next/image";

function ProductCard({ product }) {
  return (
    <div>
      <div className="bg-[#F0F1F2] p-6 rounded-xl">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={300}
          className="w-full h-40 object-contain"
        />
      </div>

      <div className="mt-3">
        <span className="text-[1.1rem] font-medium text-gray-700">
          {product.title}
        </span>

        <p className="text-[.8rem] text-gray-500">
          {product.description.slice(0, 60)}...
        </p>
      </div>

      <div className="font-semibold mt-2">R$ {product.price}</div>
    </div>
  );
}

export default ProductCard;
