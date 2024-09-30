import heroImg from "../assets/hero.svg";
import { FaGithub } from "react-icons/fa";
import TagManager from 'react-gtm-module';


const MainHero = () => {

  // Buton tıklama olaylarını yakalama fonksiyonu
  const handleAboutClick = () => {
    // GTM'e buton tıklama olayını gönderiyoruz
    TagManager.dataLayer({
      dataLayer: {
        event: 'about_button_click',  // Özel event adı
        button_id: 'mainhero_cta_button', // Butonun ID'si ya da label'ı
      },
    });

    console.log('Button clicked, event sent to GTM');
  };



  return (
    <section className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
      <div className="py-6 md:order-1 hidden md:block">
        {/* <img src={heroImg} alt="hero image"/> */}
        <picture>
          <source srcSet="/hero.webp" type="image/webp" width="100%" height="100%" />
          <img src="/hero.jpg" alt="Hero image" width="100%" height="100%" />
        </picture>
      </div>
      <div>
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight xl:tracking-tighter">
          Chas SEO website ready for test
        </h1>
        <p className="text-lg mt-4 text-slate-600 max-w-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi laudantium praesentium accusamus ullam, neque nostrum.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="/about" onClick={handleAboutClick} className="flex gap-1 items-center justify-center bg-black text-white px-5 py-3 hover:text-black hover:bg-gray-200">
            About the project
          </a>
          <a href="https://github.com/ozayo/chas-seo" className="flex gap-1 items-center justify-center border-solid border-2 border-black px-5 py-3" target="_blank">
            <FaGithub />
            GitHub Repo
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainHero;

