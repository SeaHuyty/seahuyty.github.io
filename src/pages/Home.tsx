import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales/translations';

function Home() {
  const { language } = useLanguage();
  const t = translations[language];
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
                  <li className="text-sm sm:text-[16px]">{t.computerScienceStudent}, <a href="https://cadt.edu.kh/" className="hover:underline">Cambodia Academy of Digital Technology</a></li>
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
            {language === 'en' ? (
              <>
                If you are interested in <strong>{t.collaboration}</strong>, or offering an <strong>{t.opportunity}</strong>, please feel free to reach out via his <a href="mailto:seehuyty@gmail.com" className="hover:underline">Email</a>.
              </>
            ) : (
              <>
                ប្រសិនបើអ្នកចាប់អារម្មណ៍ក្នុង<strong>{t.collaboration}</strong> ឬផ្តល់<strong>{t.opportunity}</strong> សូមទាក់ទងមកកាន់<a href="mailto:seehuyty@gmail.com" className="hover:underline">អ៊ីម៉ែល</a>របស់គាត់។
              </>
            )}
          </p>
        </div>

        <div id="experience" className="introduction mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-bold mb-4">{t.experienceEducation}</h3>
          <ul className="space-y-3 sm:space-y-2">
            <li className="flex flex-col sm:flex-row sm:items-start">
              <span className="block sm:inline-block w-full sm:w-60 text-gray-600 dark:text-gray-400 italic text-sm sm:text-base mb-1 sm:mb-0">
                {language === 'en' ? 'Oct 2024 - Dec 2025' : 'តុលា 2024 - ធ្នូ 2025'}
              </span>
              <span className="text-sm sm:text-base">
                {t.systemDeveloper}, <a href="https://www.photophnompenh.com/" className="hover:underline">Photo Phnom Penh Association</a>.
              </span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-start">
              <span className="block sm:inline-block w-full sm:w-60 text-gray-600 dark:text-gray-400 italic text-sm sm:text-base mb-1 sm:mb-0">
                {language === 'en' ? '2024 - Present' : '2024 - បច្ចុប្បន្ន'}
              </span>
              <span className="text-sm sm:text-base">
                {t.computerScienceStudent}, <a href="https://cadt.edu.kh/" className="hover:underline">
                  {language === 'en' ? 'Cambodia Academy of Digital Technology (CADT)' : 'វិទ្យាស្ថានបច្ចេកវិទ្យាឌីជីថលកម្ពុជា (CADT)'}
                </a>.
              </span>
            </li>
          </ul>
        </div>

        <div className="introduction">
          <h3 className="text-lg sm:text-xl font-bold mb-4">{t.selectedHonors}</h3>
          <ul className="space-y-3 sm:space-y-2">
            <li className="flex flex-col sm:flex-row sm:items-start">
              <span className="block sm:inline-block w-full sm:w-60 text-gray-600 dark:text-gray-400 italic text-sm sm:text-base mb-1 sm:mb-0">{t.techodigitalScholarship}</span>
              <span className="text-sm sm:text-base">
                <a href="https://cadt.edu.kh/" className="hover:underline">
                  {language === 'en' ? 'Cambodia Academy of Digital Technology (CADT)' : 'វិទ្យាស្ថានបច្ចេកវិទ្យាឌីជីថលកម្ពុជា (CADT)'}
                </a>, 2024.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;
