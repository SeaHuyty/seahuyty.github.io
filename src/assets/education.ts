export type EducationEntry = {
  id: string;
  period: { en: string; km: string };
  degree: { en: string; km: string };
  institution: { en: string; km: string };
  institutionLink: string;
};

const education: EducationEntry[] = [
  {
    id: "1",
    period: { en: "2024 - Present", km: "2024 - បច្ចុប្បន្ន" },
    degree: {
      en: "Computer Science Student",
      km: "និស្សិតវិទ្យាសាស្ត្រកុំព្យូទ័រ",
    },
    institution: {
      en: "Cambodia Academy of Digital Technology (CADT)",
      km: "វិទ្យាស្ថានបច្ចេកវិទ្យាឌីជីថលកម្ពុជា (CADT)",
    },
    institutionLink: "https://cadt.edu.kh/",
  },
];

export default education;
