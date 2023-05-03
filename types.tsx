export interface Iprojects {
  name: string;
  description: string;
  img: string;
  technology: technologypr[];
  github?: string;
  pageLink: string;
}

export type technologypr =
  | "html"
  | "css"
  | "javascript"
  | "react"
  | "tailwind css"
  | "next js"
  | "typescript"
  | "sass";
