export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  imageUrl: string;
  status: 'Completed' | 'In Progress';
  client: string;
  teamSize: string;
  duration: string;
  overview: string;
  challenges: string;
  solution: string;
  results: string;
  galleryImages: string[];
}
