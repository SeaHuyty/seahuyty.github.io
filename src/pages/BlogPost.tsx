import type { ReactElement } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TimelineSection from '../components/TimelineSection';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales/translations';
import blogs from '../assets/blogs';
import education from '../assets/education';
import experience from '../assets/experience';
import honors from '../assets/honors';

function AboutMeContent() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
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
    </>
  );
}

function MyBackgroundContent() {
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
    <div className="flex flex-col gap-3">
      <TimelineSection title={t.educationTitle} items={educationItems} />
      <TimelineSection title={t.experienceTitle} items={experienceItems} />
      <TimelineSection title={t.selectedHonors} items={honorItems} />
    </div>
  );
}

const postContent: Record<string, () => ReactElement> = {
  "about-me": AboutMeContent,
  "my-background": MyBackgroundContent,
};

function BlogPost() {
  const { language } = useLanguage();
  const t = translations[language];
  const { id } = useParams<{ id: string }>();

  const entry = blogs.find((post) => post.id === id);
  const Content = id ? postContent[id] : undefined;

  return (
    <>
      <Navbar />
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-4 sm:pb-6 lg:pb-8 font-normal pt-28 sm:pt-32 md:pt-40">
        <Link to="/blog" className="text-sm text-gray-500 dark:text-gray-400 hover:underline">
          {t.blog}
        </Link>

        {entry ? (
          <>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{entry.date}</p>
            <h1 className="text-2xl sm:text-3xl mb-6">{entry.title[language]}</h1>
            {Content ? <Content /> : null}
          </>
        ) : (
          <p className="mt-4 text-base sm:text-lg">Post not found.</p>
        )}
      </div>
      <div className="mb-16 sm:mb-24">
        <Footer />
      </div>
    </>
  );
}

export default BlogPost;
