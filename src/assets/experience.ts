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
      km: "Photo Phnom Penh Association",
    },
    organizationLink: "https://www.photophnompenh.com/",
  },
  {
    id: "2",
    period: { en: "2026 - Present", km: "2026 - បច្ចុប្បន្ន" },
    role: { en: "Junior Full-stack Developer, CAMBONEXTGEN", km: "Junior Full-stack Developer, CAMBONEXTGEN" },
    organizationLink: "https://www.cambonextgen.com/",
  },
];

export default experience;
