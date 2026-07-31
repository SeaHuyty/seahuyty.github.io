export type ExperienceEntry = {
  id: string;
  period: { en: string; km: string };
  role: { en: string; km: string };
  organization?: { en: string; km: string };
  organizationLink?: string;
};

const experience: ExperienceEntry[] = [
  {
    id: "1",
    period: { en: "Oct 2024 - Dec 2025", km: "តុលា 2024 - ធ្នូ 2025" },
    role: { en: "System Developer", km: "អ្នកអភិវឌ្ឍប្រព័ន្ធ" },
    organization: {
      en: "Photo Phnom Penh Association",
      km: "មហោស្រពរូបថតភ្នំពេញ",
    },
    organizationLink: "https://www.photophnompenh.com",
  },
  {
    id: "2",
    period: { en: "Apr 2026 - Aug 2026", km: "មេសា 2026 - សីហា 2026" },
    role: { en: "Junior Full-stack Developer, CAMBONEXTGEN INNOVATIVE TECHNOLOGIES", km: "Junior Full-stack Developer, CAMBONEXTGEN INNOVATIVE TECHNOLOGIES" },
    organizationLink: "https://www.cambonextgen.com",
  },
];

export default experience;
