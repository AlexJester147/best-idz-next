import "@/scss/app.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Best IDZ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
