import Link from "next/link";

function Footer() {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <h1 className="font-bold text-2xl text-gray-700">
            Next<span className="text-[#FF7919]">Shop</span>
          </h1>
          
          <p className="mt-3 text-sm">
            Na NextShop, você encontra produtos de qualidade com praticidade,
            segurança e uma experiência de compra simples e eficiente.
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-3">Menu</h2>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/produtos">Produtos</Link>
              </li>
              <li>
                <Link href="/ajuda">Ajuda</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-3">Contatos</h2>
            <div className="text-sm space-y-2">
              <p>contato@nextshop.com</p>
              <p>Instagram</p>
              <p>Facebook</p>
              <p>Linkedin</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-gray-50" />
      <div className="text-center py-5 px-8 text-gray-600">
        © 2026 NextShop. Todos os direitos reservados.
      </div>
    </div>
  );
}

export default Footer;
