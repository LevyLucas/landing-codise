import Hero from '@/components/Hero';
import Sobre from '@/components/About';
import Projetos from '@/components/Projects';
import Servicos from '@/components/Services';
import ContactUs from '@/components/ContactUs/ContactUs';

export default function Home() {
  return (
    <main>
      <Hero />
      <Servicos />
      <Projetos />
      <Sobre />
      <ContactUs />
    </main>
  );
}
