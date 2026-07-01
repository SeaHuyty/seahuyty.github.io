import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales/translations';

function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language];

    return (
        <nav className="top-0 left-0 w-full flex justify-between items-center text-sm px-4 py-6 sm:px-6 md:px-10 md:py-10 z-50">
            <div>
                <Link to="/" className="text-base sm:text-lg hover:text-gray-600 dark:hover:text-gray-400 transition-colors">seahuyty</Link>
            </div>
            <div className="flex gap-3 sm:gap-4 md:gap-6 items-center">
                <Link to="/projects" className="hover:underline text-xs sm:text-sm transition-colors">{t.projects}</Link>
                <Link to="/archive" className="hover:underline text-xs sm:text-sm transition-colors">{t.archive}</Link>
                
                <a href="https://github.com/SeaHuyty" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" aria-label="GitHub" title="GitHub">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10.07 20.503a1 1 0 0 0-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.7 5.7 0 0 0-1.837-2.415a1 1 0 0 1-.167-.11a1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.004.815.81 1.338 1.141 1.514a4.4 4.4 0 0 1 .924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098l.004.268a1 1 0 0 0 2 0l-.005-.318c-.005-.19-.012-.464-.012-1.182M20.737 5.377q.049-.187.09-.42a6.3 6.3 0 0 0-.408-3.293a1 1 0 0 0-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.9 13.9 0 0 0-6.354 0C6.762.75 5.455.966 5.102 1.079a1 1 0 0 0-.631.584a6.3 6.3 0 0 0-.404 3.357q.037.191.079.354a6.27 6.27 0 0 0-1.256 3.83a8 8 0 0 0 .043.921c.334 4.603 3.334 5.984 5.424 6.459a5 5 0 0 0-.118.4a1 1 0 0 0 1.942.479a1.7 1.7 0 0 1 .468-.878a1 1 0 0 0-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a7 7 0 0 1-.033-.738a4.26 4.26 0 0 1 .92-2.713a3 3 0 0 1 .195-.231a1 1 0 0 0 .188-1.025a3.4 3.4 0 0 1-.155-.555a4.1 4.1 0 0 1 .079-1.616a7.5 7.5 0 0 1 2.415 1.18a1 1 0 0 0 .827.133a11.8 11.8 0 0 1 6.173.001a1 1 0 0 0 .83-.138a7.6 7.6 0 0 1 2.406-1.19a4 4 0 0 1 .087 1.578a3.2 3.2 0 0 1-.169.607a1 1 0 0 0 .188 1.025c.078.087.155.18.224.268A4.12 4.12 0 0 1 20 9.203a7 7 0 0 1-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 0 0-.546 1.746a1.63 1.63 0 0 1 .466.908a3 3 0 0 1 .093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 1 0 2 0c0-.217 0-.692.01-1.34v-2.35a5 5 0 0 0-.155-1.311a4 4 0 0 0-.116-.416a6.51 6.51 0 0 0 5.445-6.424A9 9 0 0 0 22 9.203a6.13 6.13 0 0 0-1.263-3.826"/>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/sea-huyty-bab014283/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" aria-label="LinkedIn" title="LinkedIn">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                      <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
                <a href="mailto:seehuyty@gmail.com" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" aria-label="Email" title="Email">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                </a>

                {/* Language Toggle Button */}
                <button
                    onClick={toggleLanguage}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-xs sm:text-sm font-medium"
                    aria-label="Toggle language"
                    title={language === 'en' ? t.switchToKhmer : t.switchToEnglish}
                >
                    {language === 'en' ? 'ភាសាខ្មែរ' : 'English'}
                </button>

                                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    aria-label="Toggle theme"
                    title={theme === 'light' ? t.switchToDarkMode : t.switchToLightMode}
                >
                    {theme === 'light' ? (
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
                        </svg>
                    ) : (
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Zm0-8c-1.65,0-3,1.35-3,3s1.35,3,3,3,3-1.35,3-3-1.35-3-3-3Zm0-4c-.55,0-1-.45-1-1V2c0-.55,.45-1,1-1s1,.45,1,1v2c0,.55-.45,1-1,1Zm0,18c-.55,0-1-.45-1-1v-2c0-.55,.45-1,1-1s1,.45,1,1v2c0,.55-.45,1-1,1ZM5,12c0-.55-.45-1-1-1H2c-.55,0-1,.45-1,1s.45,1,1,1h2c.55,0,1-.45,1-1Zm18,0c0-.55-.45-1-1-1h-2c-.55,0-1,.45-1,1s.45,1,1,1h2c.55,0,1-.45,1-1ZM6.71,6.71c-.39-.39-1.02-.39-1.41,0l-1.41,1.41c-.39,.39-.39,1.02,0,1.41,.39,.39,1.02,.39,1.41,0l1.41-1.41c.39-.39,.39-1.02,0-1.41Zm12.02,9.17c-.39-.39-1.02-.39-1.41,0-.39,.39-.39,1.02,0,1.41l1.41,1.41c.39,.39,1.02,.39,1.41,0,.39-.39,.39-1.02,0-1.41l-1.41-1.41ZM18.73,6.71l-1.41,1.41c-.39,.39-.39,1.02,0,1.41,.39,.39,1.02,.39,1.41,0l1.41-1.41c.39-.39,.39-1.02,0-1.41-.39-.39-1.02-.39-1.41,0ZM6.71,17.29c-.39-.39-1.02-.39-1.41,0-.39,.39-.39,1.02,0,1.41l1.41,1.41c.39,.39,1.02,.39,1.41,0,.39-.39,.39-1.02,0-1.41l-1.41-1.41Z"/>
                        </svg>
                    )}
                </button>
            </div>
        </nav>
    )
}

export default Navbar;