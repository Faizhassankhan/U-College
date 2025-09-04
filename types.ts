
export interface NavLink {
  label: string;
  href: string;
  subLinks?: NavLink[];
}

export interface Course {
  image: string;
  title: string;
  description: string;
  duration: string;
}

export interface FacultyMember {
  photo: string;
  name: string;
  designation: string;
  social: {
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

export interface EventItem {
  image: string;
  date: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}
