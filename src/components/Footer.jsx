import Link from "next/link";

function Footer() {
  return (
    <div className="bg-gray-800">
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <h1 className="font-bold text-2xl text-gray-50">
            Next<span className="text-[#FF7919]">Shop</span>
          </h1>

          <p className="text-white mt-3 text-sm">
            Na NextShop, você encontra produtos de qualidade com praticidade,
            segurança e uma experiência de compra simples e eficiente.
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-white mb-3">Menu</h2>
            <ul className="text-sm space-y-2 text-gray-200">
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:underline transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos"
                  className="hover:text-white hover:underline transition"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/ajuda"
                  className="hover:text-white hover:underline transition"
                >
                  Ajuda
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-white mb-3">Contatos</h2>
            <div className="flex flex-col text-sm space-y-2 text-gray-50">
              <a
                href="#"
                className="hover:text-white hover:underline transition"
              >
                contato@nextshop.com
              </a>
              <a
                href="#"
                className="hover:text-white hover:underline transition"
              >
                Instagram
              </a>
              <a
                href="#"
                className="hover:text-white hover:underline transition"
              >
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-white hover:underline transition"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-5 px-8 text-gray-50">
        © 2026 NextShop. Todos os direitos reservados.
      </div>
    </div>
  );
}

export default Footer;
