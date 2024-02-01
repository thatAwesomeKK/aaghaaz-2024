import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col overflow-hidden ">
      <Header />
      <Hero />
      <Events />
      <Footer />
    </main>
  );
}
