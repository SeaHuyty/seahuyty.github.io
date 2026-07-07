import { Fragment, type ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TimelineSection from '../components/TimelineSection';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales/translations';
import education from '../assets/education';
import experience from '../assets/experience';
import honors from '../assets/honors';

function renderTemplate(template: string, tokens: Record<string, ReactNode>) {
  return template.split(/(\{[^}]+\})/g).map((part, i) => {
    const match = part.match(/^\{([^}]+)\}$/);
    if (match && tokens[match[1]] !== undefined) {
      return <Fragment key={i}>{tokens[match[1]]}</Fragment>;
    }
    return part;
  });
}

function Home() {
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
    <>
      <Navbar />
      <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-4 sm:py-6 lg:py-8 font-normal mt-2 sm:mt-2 md:mt-3">
        <div className="header mb-6 sm:mb-8">
          <img
            src="https://avatars.githubusercontent.com/u/185038956?v=4"
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52 rounded-full mx-auto mb-4 sm:mb-6 object-cover"
            alt="Sea Huyty Profile"
          />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-4 sm:mt-8 space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl mb-2">{t.name}</h1>

              <div className="mb-4">
                <ul className="space-y-1 text-black dark:text-white">
                  <li className="text-sm sm:text-[16px]">
                    Junior Software Developer, <a href="https://www.cambonextgen.com/" className='hover:underline'>CAMBONEXTGEN</a>
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

        <div id="about" className="introduction mb-6 sm:mb-8">
          <p className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
            {t.aboutIntro}
          </p>

          <p className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
            {t.aboutProjects}
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            {renderTemplate(t.aboutContact, {
              collaboration: <strong>{t.collaboration}</strong>,
              opportunity: <strong>{t.opportunity}</strong>,
              email: <a href="mailto:seehuyty@gmail.com" className="hover:underline">{t.emailLabel}</a>,
            })}
          </p>
        </div>

        <TimelineSection title={t.educationTitle} items={educationItems} />
        <TimelineSection title={t.experienceTitle} items={experienceItems} />
        <TimelineSection title={t.selectedHonors} items={honorItems} />
      </div>
      <Footer />
    </>
  )
}

export default Home;
