import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "NextShop",
  description: "Mini e-commerce feito com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#FAFAFA]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}