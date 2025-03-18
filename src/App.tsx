
import CardComponent from "./components/CardComponent";
import CustomerReview from "./components/CustomerReview";
import FooterComponent from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import MainBanner from "./components/MainBanner";
import NavbarComponent from "./components/Navbar"
import Services from "./components/services";
import TextBanner from "./components/TextBanner";
import WhatsAppForm from "./components/WhatsaooForm";

function App() {
  return (
    <>
      <NavbarComponent />
    <main className="bg-gray-100 dark:bg-gray-800  pb-8">
      <MainBanner />
      <TextBanner />
      <HeroBanner />
      <Services />
      <CardComponent />
      <CustomerReview />
      <WhatsAppForm />
    </main>
     <FooterComponent />
    </>
  );
}

export default App;
