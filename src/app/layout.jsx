import Footer from "@/components/Footer";
import "./globals.css";
import { Poppins } from "next/font/google";
const popins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
import Header from "@/components/Header";
export async function generateMetadata() {
  const res = await fetch(process.env.BASE_URL + "api/SiteMeta/home");
  const data = await res.json();
  return {
    title: data[0]["title"],
    description: data[0]["description"],
    keywords: data[0]["keywords"],
    openGraph: {
      images: data[0]["image"],
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={popins.className}>
        <Header /> {children} <Footer />
      </body>
    </html>
  );
}
