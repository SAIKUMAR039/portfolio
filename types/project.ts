export interface Project {
  id?: string;
  slug?: string;
  name: string;
  gitURL: string;
  liveURL?: string;
  description: string;
  technologies: readonly string[];
  image: string;
  year: string;
  features: readonly string[];
  problemStatement?: string;
  solution?: string;
  architecture?: {
    overview: string;
    details: readonly string[];
  };
  highlights?: readonly string[];
}