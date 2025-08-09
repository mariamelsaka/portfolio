import type { IconType } from "react-icons";

export interface ProjectTypes {
  title: string,
  image: string,
  description: string,
  category: string,
  githubLink?: string,
  liveDemoLink?: string,
  skills:Array<string>

};

export interface ServicesIprop{
  title:string;
  icon: IconType;
  description:string;
}
