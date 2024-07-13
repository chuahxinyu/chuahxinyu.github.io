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

export enum SkillsTag {
  
}

export enum TypeTag {
  CurrentObsession = "Current Obsession",
  Archived = "Archived",
  Award = "Award",
  FinancialTrading = "Financial Trading",
  Random = "Random",
}