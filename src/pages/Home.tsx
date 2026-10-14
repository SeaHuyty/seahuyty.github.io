import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamBadge from '../components/TeamBadge';
import ProjectsSection from '../components/ProjectsSection';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales/translations';
import smeanAiLogo from '../assets/images/smean_ai_logo.jpeg';
import bongkertSolutionLogo from '../assets/images/bongkert_solution_logo.jpeg';

function HomeContent() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="container px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-4 sm:py-6 lg:py-8 font-normal pt-20 sm:pt-24 md:pt-32">
      <div className="header mb-6 sm:mb-8">
        <img
          src="https://avatars.githubusercontent.com/u/185038956?v=4"
          className="w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52 rounded-full mx-auto mt-16 sm:mt-24 mb-4 sm:mb-6 object-cover"
          alt="Sea Huyty Profile"
        />
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-4 sm:mt-8 space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl mb-2">{t.name}</h1>

            <div className="mb-4">
              <ul className="space-y-1 text-black dark:text-white">
                <li className="text-sm sm:text-[16px]">
                  Junior Software Developer
                </li>
                <li className="text-sm hover:underline"><a href="mailto:seehuyty@gmail.com">seehuyty@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <DotLottieReact
              src="https://lottie.host/35e2fe80-26ff-4775-9681-033685fd82c0/BDMCCx6qK5.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 mb-6 sm:mb-8">
        <div className="introduction">
          <TeamBadge label="Team of" href="https://www.smean.ai/" logoSrc={smeanAiLogo} logoAlt="Smean AI" name="SMEAN" />
          <TeamBadge label="Maintaining Systems for " href="https://www.photophnompenh.com/" logoSrc="https://cdn.prod.website-files.com/6509c7220ff20430dc5120c6/65198b5caf4f709c4a1915b5_main-logo.png" logoAlt="Photo Phnom Penh" name="Photo Phnom Penh" />
          <div className='flex gap-3'>
            <TeamBadge label="Working at" logoSrc={bongkertSolutionLogo} logoAlt="Bongkert Solution" name="Bongkert Solution" />
            <TeamBadge label="Building Projects for" logoSrc="https://web-storage.interior.gov.kh/media/moi-2024040410013683rDsC2txH1F.png" logoAlt="Ministry of Interior" name="Ministry of Interior" />
          </div>
        </div>
      </div>

      <div>
        <p className="mb-3 sm:mb-4 text-base sm:text-lg leading-relaxed">
          {t.homeIntro}
        </p>
        <p className="mb-3 sm:mb-4 text-base sm:text-lg leading-relaxed">
          {t.homeCta}
        </p>
      </div>

      <ProjectsSection />
    </div>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <HomeContent />
      <div className="mb-16 sm:mb-24">
        <Footer />
      </div>
    </>
  )
}

export default Home;
