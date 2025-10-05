import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio de Santiago",
  description: "Backend Developer especializado en Node.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
