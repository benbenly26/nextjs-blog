import { Rubik } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";

const mons = Rubik({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mons.className}>
        <div>
          <Toaster position="top-center" richColors duration={3000} />
        </div>
        <div>
          <div>
            <Header />
          </div>
          <div>{children}</div>
          <div className="mt-2">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}