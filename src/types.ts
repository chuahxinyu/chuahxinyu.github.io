export interface NavItem {
  title: string;
  href: string;
}

export interface SocialLink {
  icon: React.ReactNode;
  alt: string;
  href: string;
}

export interface Tag {
  name: SkillsTagName | TypeTagName;
  bgColor: string;
  fgColor: string;
}

export interface Project {
  title: string;
  description: string;
  coverImage: string;
  urls: {
    type: "GitHub" | "Website";
    text: string;
    url: string;
  }[];
  tags: Tag[];
}

export enum SkillsTagName {}

export enum TypeTagName {
  CurrentObsession = "Current Obsession",
  Archived = "Archived",
  Award = "Award",
  FinancialTrading = "Financial Trading",
  Random = "Random",
}
