
import type { NavLink, Course, FacultyMember, EventItem, GalleryImage } from '../types';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { 
    label: 'About Us', 
    href: '#about',
    subLinks: [
      { label: 'Our Mission', href: '#about' },
      { label: 'Our Vision', href: '#about' },
      { label: 'History', href: '#about' },
    ]
  },
  { label: 'Courses', href: '#courses' },
  { label: 'Admissions', href: '#admissions' },
  { 
    label: 'Departments', 
    href: '#courses',
    subLinks: [
      { label: 'Computer Science', href: '#courses' },
      { label: 'Mechanical Engineering', href: '#courses' },
      { label: 'Business Administration', href: '#courses' },
    ]
  },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Events', href: '#events' },
  { label: 'Contact Us', href: '#contact' },
];

export const courses: Course[] = [
  {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&h=300&auto=format&fit=crop',
    title: 'Computer Science',
    description: 'Explore the world of algorithms, data structures, and software engineering.',
    duration: '4 Years',
  },
  {
    image: 'https://images.unsplash.com/photo-1628258334105-2a0b3d6ef5f3?q=80&w=400&h=300&auto=format&fit=crop',
    title: 'Mechanical Engineering',
    description: 'Dive into thermodynamics, fluid mechanics, and machine design.',
    duration: '4 Years',
  },
  {
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=400&h=300&auto=format&fit=crop',
    title: 'Business Administration',
    description: 'Master the principles of management, finance, and marketing.',
    duration: '3 Years',
  },
  {
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&h=300&auto=format&fit=crop',
    title: 'Fine Arts',
    description: 'Unleash your creativity through painting, sculpture, and digital media.',
    duration: '3 Years',
  },
   {
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=400&h=300&auto=format&fit=crop',
    title: 'Biology',
    description: 'Study the science of life, from molecular genetics to ecosystem dynamics.',
    duration: '4 Years',
  },
  {
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=400&h=300&auto=format&fit=crop',
    title: 'Chemistry',
    description: 'Delve into the composition, structure, and properties of matter.',
    duration: '4 Years',
  },
];

export const faculty: FacultyMember[] = [
  {
    photo: 'https://images.unsplash.com/photo-1580894732444-84cf4b3cd289?q=80&w=200&h=200&auto=format&fit=crop',
    name: 'Dr. Evelyn Reed',
    designation: 'Head of Computer Science',
    social: {
      twitter: '#',
      linkedin: '#',
      email: 'e.reed@univera.edu',
    },
  },
  {
    photo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=200&h=200&auto=format&fit=crop',
    name: 'Prof. Samuel Chen',
    designation: 'Professor of Mechanical Eng.',
    social: {
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    photo: 'https://images.unsplash.com/photo-1489980557514-251d61e3e86e?q=80&w=200&h=200&auto=format&fit=crop',
    name: 'Dr. Maria Garcia',
    designation: 'Dean of Business School',
    social: {
      linkedin: '#',
      email: 'm.garcia@univera.edu',
    },
  },
  {
    photo: 'https://images.unsplash.com/photo-1527526550388-a342a78f4b47?q=80&w=200&h=200&auto=format&fit=crop',
    name: 'Prof. David Lee',
    designation: 'Head of Fine Arts',
    social: {
      twitter: '#',
      email: 'd.lee@univera.edu',
    },
  },
];

export const events: EventItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&h=400&auto=format&fit=crop',
    date: 'OCT 25, 2024',
    title: 'Annual Tech Symposium 2024',
    description: 'Join us for a day of innovation, keynote speakers, and workshops on the future of technology.'
  },
  {
    image: 'https://images.unsplash.com/photo-1579952516518-6c213a1a4b60?q=80&w=600&h=400&auto=format&fit=crop',
    date: 'NOV 12, 2024',
    title: 'Inter-College Sports Meet',
    description: 'Cheer for our athletes as they compete in various sports for the championship trophy.'
  },
  {
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&h=400&auto=format&fit=crop',
    date: 'DEC 05, 2024',
    title: 'Cultural Fest: "Spectrum"',
    description: 'Experience a vibrant celebration of art, music, and dance from around the world.'
  },
    {
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=600&h=400&auto=format&fit=crop',
    date: 'JAN 15, 2025',
    title: 'Alumni Homecoming',
    description: 'Reconnect with old friends, faculty, and relive your campus memories.'
  }
];

export const galleryImages: GalleryImage[] = [
    { id: 1, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&h=500&auto=format&fit=crop', alt: 'Students collaborating' },
    { id: 2, src: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=500&h=500&auto=format&fit=crop', alt: 'University main building' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=500&h=500&auto=format&fit=crop', alt: 'Graduation ceremony' },
    { id: 4, src: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=500&h=500&auto=format&fit=crop', alt: 'Library interior' },
    { id: 5, src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=500&h=500&auto=format&fit=crop', alt: 'Students in a classroom' },
    { id: 6, src: 'https://images.unsplash.com/photo-1517488629431-6427e0ee1e5f?q=80&w=500&h=500&auto=format&fit=crop', alt: 'Sports team celebrating victory' },
    { id: 7, src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=500&h=500&auto=format&fit=crop', alt: 'Music event' },
    { id: 8, src: 'https://images.unsplash.com/photo-1549887552-cb137563e6ca?q=80&w=500&h=500&auto=format&fit=crop', alt: 'Professor giving a lecture' },
];
