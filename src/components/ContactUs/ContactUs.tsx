import Top from './top';
import Bottom from './bottom';

const ContactUs = () => {
  return (
    <section id="contato" className="bg-[#061E3B] py-20 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
        <Top />
        <Bottom />
      </div>
    </section>
  );
}

export default ContactUs;