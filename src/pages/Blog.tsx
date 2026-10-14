import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales/translations';
import blogs from '../assets/blogs';

function Blog() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <Navbar />
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-4 sm:pb-6 lg:pb-8 font-normal pt-28 sm:pt-32 md:pt-40">
        <h1 className="text-2xl sm:text-3xl mb-6">{t.blog}</h1>

        <ul className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
          {blogs.map((entry) => (
            <li key={entry.id}>
              <Link
                to={`/blog/${entry.id}`}
                className="flex items-baseline gap-4 sm:gap-6 py-3 sm:py-4 group"
              >
                <span className="shrink-0 w-24 sm:w-28 text-sm text-gray-500 dark:text-gray-400">
                  {entry.date}
                </span>
                <span className="text-base sm:text-lg group-hover:underline">
                  {entry.title[language]}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-16 sm:mb-24">
        <Footer />
      </div>
    </>
  );
}

export default Blog;
