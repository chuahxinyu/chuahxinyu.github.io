import type { ILink } from "./ILink";

export interface IProject {
  projectName: string,
  startDate: string,
  endDate: string,
  tags: string[],
  links: ILink[],
  images?: any[], // TODO
  descriptions: string[]
}