export type HonorEntry = {
  id: string;
  title: { en: string; km: string };
  organization: { en: string; km: string };
  organizationLink: string;
  year: string;
};

const honors: HonorEntry[] = [
  {
    id: "1",
    title: {
      en: "Techo Digital Talent Scholarship",
      km: "អាហារូបករណ៍ ទេពកោសល្យ ឌីជីថល តេជោ",
    },
    organization: {
      en: "Computer Science, Cambodia Academy of Digital Technology (CADT)",
      km: "វិទ្យាសាស្ត្រកុំព្យូទ័រ, បណ្ឌិត្យសភាបច្ចេកវិទ្យាឌីជីថលកម្ពុជា (CADT)",
    },
    organizationLink: "https://cadt.edu.kh",
    year: "2024",
  },
  {
    id: "2",
    title: {
      en: "Techpreneur BootCamp Cohort 2",
      km: "Techpreneur BootCamp ជំនាន់ទី២",
    },
    organization: { en: "AI & Data Science, Dichi Academy", km: "បញ្ញាសិប្បនិម្មិត & វិទ្យាសាស្ត្រទិន្នន័យ, Dichi Academy" },
    organizationLink: "https://dichi.academy",
    year: "2026",
  },
];

export default honors;
