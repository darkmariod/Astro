export interface Tour {
  id: string;
  title: string;
  region: 'Amazonía' | 'Andes' | 'Costa' | 'Galápagos' | 'Ecuador' | 'Comunidad';
  duration: string;
  price: number;
  image: string;
  tag?: string;
  description: string;
  location: string;
  operation?: string;
  groupSize?: string;
  itinerary: { day: string | number; title: string; description: string }[];
  included: string[];
  notIncluded: string[];
  priceNote?: string;
  isLuxury?: boolean;
}

export type Page = 'home' | 'about' | 'tours' | 'tour-detail';
