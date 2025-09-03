import HeaderNavbar from "../_components/header/header-navbar/header-navbar";
import AboutUs from "../_components/about-us/about-us";
import Footer from "../_components/footer/footer";
export default function AboutPage() {
  return (
    <>
      <section>
        <header>
          <HeaderNavbar />
        </header>
        <main>
          <AboutUs />
        </main>
        <footer>
          <Footer />
        </footer>
      </section>
    </>
  );
}
