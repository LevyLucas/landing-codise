import Hero from '@/components/Hero';
import Sobre from '@/components/About';
import Projetos from '@/components/Projects';
import Servicos from '@/components/Services';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Projetos />
        <Servicos />
      </main>
      <Footer />
    </>
  );
}
