export type LinkItem = {
  label: string;
  href: string;
};

export type Person = {
  name: string;
  role: string;
  group: "lead" | "researcher" | "student" | "alumni";
  affiliation?: string;
  bio?: string;
  image?: string;
  links?: LinkItem[];
  order: number;
};

export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  topicTags?: string[];
  paperUrl?: string;
  codeUrl?: string;
  featured?: boolean;
};

export type ResourceItem = {
  title: string;
  category: string;
  summary: string;
  href?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  order: number;
};

export type SiteConfig = {
  labName: string;
  tagline: string;
  description: string;
  email: string;
  githubUrl: string;
  ctaPrimary: {
    label: string;
    href: string;
  };
  ctaSecondary: {
    label: string;
    href: string;
  };
  socialLinks?: LinkItem[];
};
