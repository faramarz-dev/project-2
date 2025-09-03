import { Header } from "../_components/header/header";
import Footer from "../_components/footer/footer";



export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer/>
    </>
  );
}
