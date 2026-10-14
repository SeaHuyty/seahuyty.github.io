export type BlogEntry = {
  id: string;
  date: string;
  title: { en: string; km: string };
};

const blogs: BlogEntry[] = [
  {
    id: "about-me",
    date: "2026-01-01",
    title: {
      en: "About Me",
      km: "អំពីខ្ញុំ",
    },
  },
  {
    id: "my-background",
    date: "2026-01-02",
    title: {
      en: "My Background",
      km: "ប្រវត្តិរបស់ខ្ញុំ",
    },
  },
];

export default blogs;
