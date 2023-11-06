import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@components/navbar";
import Footer from "@components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Construction and Property Services in Uganda | Hakw Properties And Construction Uganda Ltd",
  description:
    "Hakw Properties And Construction Uganda Ltd offers construction services, electrical services, plumbing services, interior design services, ac installation and other services related to construction and properties in Uganda and Kampala and all other cities of Uganda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"></script>
      </head>
      <body className="bg-white text-gray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
