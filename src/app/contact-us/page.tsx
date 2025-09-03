import ContactUs from "../_components/contact-us/contact-us";
import HeaderNavbar from "../_components/header/header-navbar/header-navbar";
import Footer from "../_components/footer/footer";
export default function ContactPage() {
  return (
    <>
      <section>
        <header>
          <HeaderNavbar />
        </header>
        <main>
          <ContactUs />
        </main>
        <footer>
          <Footer />
        </footer>
      </section>
    </>
  );
}
