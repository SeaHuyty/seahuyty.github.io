export const translations = {
  en: {
    // Navbar
    projects: "Projects",
    archive: "Archive",

    // Home Page
    name: "Sea Huyty",
    aboutIntro:
      "Hey! I'm Huyty, a software engineer in Phnom Penh, I'm actively developing my expertise in software engineering, web development, and mobile application design.",
    aboutProjects:
      "I have worked on a variety of academic and independent projects, ranging from data-driven web applications to real-world simulation systems such as real-estate and ticket-booking platforms.",
    aboutContact:
      "If you are interested in {collaboration}, or offering an {opportunity}, please feel free to reach out via my {email}.",
    collaboration: "collaboration",
    opportunity: "opportunity",
    emailLabel: "Email",
    educationTitle: "Education",
    experienceTitle: "Experience",
    selectedHonors: "Selected Honors",

    // Projects Page
    projectsTitle: "Projects",
    projectsSubtitle:
      "Take a look at my projects to see how I approach different challenges and bring ideas to life.",
    exploreCategoryProjects: "Explore my {category} projects",
    project: "project",
    projectsPlural: "projects",

    // Archive Page
    archivesTitle: "Archives",

    // Theme Toggle
    switchToDarkMode: "Switch to Dark Mode",
    switchToLightMode: "Switch to Light Mode",

    // Language Toggle
    switchToKhmer: "ប្តូរទៅភាសាខ្មែរ",
    switchToEnglish: "Switch to English",
  },

  km: {
    // Navbar
    projects: "គម្រោង",
    archive: "បណ្ណសារ",

    // Home Page
    name: "ស៊ា ហ៊ុយទី",

    aboutIntro:
      "សួស្តី! ខ្ញុំឈ្មោះ ហ៊ុយទី ជាវិស្វករសូហ្វវែរនៅរាជធានីភ្នំពេញ។ បច្ចុប្បន្ន ខ្ញុំកំពុងអភិវឌ្ឍជំនាញរបស់ខ្ញុំលើវិស្វកម្មសូហ្វវែរ ការអភិវឌ្ឍគេហទំព័រ និងការរចនាកម្មវិធីទូរសព្ទ។",

    aboutProjects:
      "ខ្ញុំបានធ្វើការលើគម្រោងសិក្សា និងគម្រោងផ្ទាល់ខ្លួនជាច្រើន ចាប់ពីកម្មវិធីគេហទំព័រដែលផ្អែកលើទិន្នន័យ រហូតដល់ប្រព័ន្ធក្លែងធ្វើសម្រាប់ការប្រើប្រាស់ជាក់ស្តែង ដូចជា វេទិកាអចលនទ្រព្យ និងប្រព័ន្ធកក់សំបុត្រ។",

    aboutContact:
      "ប្រសិនបើអ្នកចាប់អារម្មណ៍ក្នុង{collaboration} ឬផ្តល់{opportunity} សូមទាក់ទងមកកាន់{email}របស់គាត់។",

    collaboration: "ការសហការ",
    opportunity: "ឱកាស",
    emailLabel: "អ៊ីម៉ែល",

    educationTitle: "ការអប់រំ",
    experienceTitle: "បទពិសោធន៍",

    selectedHonors: "កិត្តិយសដែលទទួលបាន",

    // Projects Page
    projectsTitle: "គម្រោង",

    projectsSubtitle:
      "សូមទស្សនាគម្រោងរបស់ខ្ញុំ ដើម្បីឃើញពីរបៀបដែលខ្ញុំដោះស្រាយបញ្ហាប្រឈមផ្សេងៗ និងប្រែក្លាយគំនិតឱ្យក្លាយជាការពិត។",

    exploreCategoryProjects: "ស្វែងយល់ពីគម្រោង{category}របស់ខ្ញុំ",

    project: "គម្រោង",
    projectsPlural: "គម្រោង",

    // Archive Page
    archivesTitle: "បណ្ណសារ",

    // Theme Toggle
    switchToDarkMode: "ប្តូរទៅផ្ទៃងងឹត",
    switchToLightMode: "ប្តូរទៅផ្ទៃភ្លឺ",

    // Language Toggle
    switchToKhmer: "ប្តូរទៅភាសាខ្មែរ",
    switchToEnglish: "Switch to English",
  },
};

export type TranslationKey = keyof typeof translations.en;