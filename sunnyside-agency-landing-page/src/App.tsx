import Header from "./components/Header";
import Pitch from "./components/Pitch";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Pitch />
        <Testimonials />
      </main>

      <Footer />
    </>
  );
}
