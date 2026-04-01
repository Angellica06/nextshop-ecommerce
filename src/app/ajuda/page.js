'use client'
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { FaBox, FaCreditCard, FaTruck, FaExchangeAlt, FaUser, FaFileAlt } from "react-icons/fa";

function Page() {
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    const faqs = [
        {
            id: 1,
            question: "Como acompanho meu pedido?",
            answer: "Você pode acompanhar o status do seu pedido na área de pedidos após a compra."
        },
        {
            id: 2,
            question: "Quais formas de pagamento são aceitas?",
            answer: "Aceitamos cartão de crédito, débito e outras formas disponíveis no checkout."
        },
        {
            id: 3,
            question: "Posso trocar ou devolver um produto?",
            answer: "Sim, você pode solicitar troca ou devolução dentro do prazo após o recebimento."
        }
    ];

    return (
        <div className="mt-18">
            <div className="flex flex-col justify-center items-center bg-[#fff3e0] min-h-[36vh] px-4">
                <h1 className="text-center text-3xl font-semibold text-amber-500">Oi, como podemos ajudar?</h1>

                <div className="flex sm:flex-row justify-center mt-4 gap-3">
                    <input
                        type="search"
                        placeholder="Procurar..."
                        className="border border-gray-400 rounded-md px-4 py-3 w-full sm:w-120 focus:outline-none"
                    />

                    <button className="bg-amber-500 text-white rounded-md px-6 py-3">
                        <BsSearch className="text-xl" />
                    </button>
                </div>
            </div>

            <div className="mt-8 max-w-4xl mx-auto py-2 px-5">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Categorias
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                    <div className="flex justify-center gap-3 rounded-lg p-6 text-center border border-gray-400 cursor-pointer hover:bg-amber-100 transition">
                        <FaBox className="text-xl text-amber-500" />
                        <p className="font-medium text-gray-700">Pedidos</p>
                    </div>

                    <div className="flex justify-center gap-3 rounded-lg p-6 text-center border border-gray-400 cursor-pointer hover:bg-amber-100 transition">
                        <FaCreditCard className="text-xl text-amber-500" />
                        <p className="font-medium text-gray-700">Pagamento</p>
                    </div>

                    <div className="flex justify-center gap-3 rounded-lg p-6 text-center border border-gray-400 cursor-pointer hover:bg-amber-100 transition">
                        <FaTruck className="text-xl text-amber-500" />
                        <p className="font-medium text-gray-700">Entrega</p>
                    </div>

                    <div className="flex justify-center gap-3 rounded-lg p-6 text-center border border-gray-400 cursor-pointer hover:bg-amber-100 transition">
                        <FaExchangeAlt className="text-xl text-amber-500" />
                        <p className="font-medium text-gray-700">Trocas</p>
                    </div>

                    <div className="flex justify-center gap-3 rounded-lg p-6 text-center border border-gray-400 cursor-pointer hover:bg-amber-100 transition">
                        <FaUser className="text-xl text-amber-500" />
                        <p className="font-medium text-gray-700">Conta</p>
                    </div>
                    <div className="flex justify-center gap-3 rounded-lg p-6 text-center border border-gray-400 cursor-pointer hover:bg-amber-100 transition">
                        <FaFileAlt className="text-xl text-amber-500" />
                        <p className="font-medium text-gray-700">Políticas</p>
                    </div>

                </div>
            </div>

            <div className="mt-10 max-w-4xl mx-auto py-2 px-5">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Perguntas frequentes
                </h2>

                <div className="space-y-4">
                    {faqs.map((item) => (
                        <div key={item.id} className="rounded-lg p-4 shadow">
                            <h3 className="flex justify-between font-medium text-gray-600">
                                {item.question}
                                <FaAngleDown
                                    className={`cursor-pointer transition-transform ${openId === item.id ? "rotate-180" : ""
                                        }`}
                                    onClick={() => toggle(item.id)}
                                />
                            </h3>

                            {openId === item.id && (
                                <p className="text-gray-600 text-sm mt-2">
                                    {item.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Page;
