import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TimelineSection from '../components/TimelineSection';
import TeamBadge from '../components/TeamBadge';
import ProjectsSection from '../components/ProjectsSection';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales/translations';
import education from '../assets/education';
import experience from '../assets/experience';
import honors from '../assets/honors';
import smeanAiLogo from '../assets/images/smean_ai_logo.jpeg';
import bongkertSolutionLogo from '../assets/images/bongkert_solution_logo.jpeg';

function HomeContent() {
  const { language } = useLanguage();
  const t = translations[language];

  const educationItems = education.map((entry) => ({
    id: entry.id,
    label: entry.period[language],
    content: (
      <>
        {entry.degree[language]}, <a href={entry.institutionLink} className="hover:underline">{entry.institution[language]}</a>.
      </>
    ),
  }));

  const experienceItems = experience.map((entry) => ({
    id: entry.id,
    label: entry.period[language],
    content: (
      <>
        {entry.role[language]}
        {entry.organization && (
          <>, <a href={entry.organizationLink} className="hover:underline">{entry.organization[language]}</a></>
        )}
        .
      </>
    ),
  }));

  const honorItems = honors.map((entry) => ({
    id: entry.id,
    label: entry.title[language],
    gapVariant: true,
    content: (
      <>
        <a href={entry.organizationLink} className="hover:underline">{entry.organization[language]}</a>, {entry.year}.
      </>
    ),
  }));

  return (
    <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-4 sm:py-6 lg:py-8 font-normal pt-20 sm:pt-24 md:pt-32">
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

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mb-6 sm:mb-8">
        <div className="introduction lg:w-3/5">
          <TeamBadge label="Team of" href="https://www.smean.ai/" logoSrc={smeanAiLogo} logoAlt="Smean AI" name="SMEAN" />
          <div className='flex gap-3'>
            <TeamBadge label="Working at" logoSrc={bongkertSolutionLogo} logoAlt="Bongkert Solution" name="Bongkert Solution" />
            <TeamBadge label="Building Project for" logoSrc="https://web-storage.interior.gov.kh/media/moi-2024040410013683rDsC2txH1F.png" logoAlt="Ministry of Interior" name="Ministry of Interior" />
          </div>
          <br />

          <p className="mb-3 sm:mb-4 text-base sm:text-lg leading-relaxed">
            {t.aboutIntro}
          </p>

          <p className="mb-3 sm:mb-4 text-base sm:text-lg leading-relaxed">
            {t.aboutPassion}
          </p>

          <p className="mb-3 sm:mb-4 text-base sm:text-lg leading-relaxed">
            {t.aboutOutside}
          </p>

          <br />

          <p className="mb-3 sm:mb-4 text-base sm:text-lg leading-relaxed">
            {t.aboutQuestionLead}
          </p>

          <br />

          <blockquote className="mb-3 sm:mb-4 border-l-2 border-gray-400 dark:border-gray-500 pl-4 text-sm sm:text-base font-semibold leading-relaxed">
            {t.aboutQuote}
          </blockquote>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 lg:w-2/5">
          <TimelineSection title={t.educationTitle} items={educationItems} />
          <TimelineSection title={t.experienceTitle} items={experienceItems} />
          <TimelineSection title={t.selectedHonors} items={honorItems} />
        </div>
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
