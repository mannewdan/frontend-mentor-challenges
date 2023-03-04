import Header from "./components/Header";
import Pitch from "./components/Pitch";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Pitch />
        <Testimonials />
      </main>
    </>
  );
}
