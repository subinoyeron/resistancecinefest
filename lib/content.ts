export const brand = {
  name: "Resistance Cinema Fest",
  shortName: "RCF",
  year: 2026,
  email: "info@resistancecinema.org",
} as const;

export const nav = {
  links: [
    { label: "Why", href: "#why" },
    { label: "Timeline", href: "#timeline" },
    { label: "Experience", href: "#experience" },
    { label: "Films", href: "#films" },
    { label: "Workshop", href: "#workshop" },
    { label: "Partners", href: "#partners" },
  ],
  cta: "Register",
} as const;

export const hero = {
  title: "Resistance Cinema Fest",
  subtitle:
    "A Creative Intervention on Torture Prevention, Transitional Justice, and Solidarity",
  date: "26 June 2026",
  location: "Dhaka, Bangladesh",
  primaryCta: "Register Now",
  secondaryCta: "Explore Programme",
} as const;

export const whyCards = [
  {
    title: "Witness",
    description: "Holding space for survivor stories",
    color: "orange" as const,
  },
  {
    title: "Document",
    description: "Film as testimony and evidence",
    color: "red" as const,
  },
  {
    title: "Resist",
    description: "Building collective memory",
    color: "teal" as const,
  },
  {
    title: "Justice",
    description: "Imagining accountability and prevention",
    color: "yellow" as const,
  },
] as const;

export const timeline = [
  {
    label: "July 2024 uprising",
    text: "A generation took to the streets demanding dignity and change.",
  },
  {
    label: "State violence",
    text: "The response left wounds that cameras and courts must not forget.",
  },
  {
    label: "Torture",
    text: "Detention, coercion, and silence became tools of control.",
  },
  {
    label: "Memory",
    text: "What is not recorded risks being erased from public life.",
  },
  {
    label: "Truth",
    text: "Testimony and footage become evidence when shared with care.",
  },
  {
    label: "Resistance",
    text: "Communities refuse amnesia through film, art, and assembly.",
  },
  {
    label: "Justice",
    text: "Prevention begins when witness becomes collective practice.",
  },
] as const;

export const experience = [
  {
    title: "Watch films",
    description: "Documentary screenings across three thematic tracks.",
    icon: "🎬",
  },
  {
    title: "Join discussions",
    description: "Panels with filmmakers, lawyers, and survivors.",
    icon: "💬",
  },
  {
    title: "Experience artivism",
    description: "Installations that turn archive into public memory.",
    icon: "🎨",
  },
  {
    title: "Attend workshops",
    description: "Hands-on labs for ethical documentation.",
    icon: "🛠",
  },
  {
    title: "Connect with survivors and defenders",
    description: "Spaces built for solidarity, not spectacle.",
    icon: "🤝",
  },
] as const;

export const films = [
  {
    title: "Counting the Days",
    country: "Bangladesh",
    theme: "Torture Prevention",
    runtime: "72 min",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "The Room Where Names Are Read",
    country: "International",
    theme: "Transitional Justice",
    runtime: "58 min",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Signal Lost",
    country: "South Asia",
    theme: "Solidarity",
    runtime: "64 min",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Evidence Room 7",
    country: "Bangladesh",
    theme: "Human Rights",
    runtime: "81 min",
    poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80",
  },
] as const;

export const workshop = {
  title: "Video for Change Lab",
  description:
    "A practical workshop for filmmakers, journalists, and advocates documenting state violence with trauma-informed ethics.",
  topics: [
    "Trauma-informed filmmaking",
    "Ethical documentation",
    "Advocacy storytelling",
  ],
  cta: "Apply",
} as const;

export const archive = [
  {
    label: "Survivor testimonies",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Protest graffiti",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Documentary stills",
    image: "https://images.unsplash.com/photo-1536440136627-7c1e1cbb1ba4?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Visual evidence",
    image: "https://images.unsplash.com/photo-1574267432644-f6102b606d4d?auto=format&fit=crop&w=600&q=80",
  },
] as const;

export const participants = [
  { role: "Victims", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
  { role: "Survivors", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" },
  { role: "Filmmakers", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" },
  { role: "Lawyers", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
  { role: "Journalists", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
  { role: "Activists", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
] as const;

export const impact = [
  { title: "Awareness", icon: "👁", description: "Public screenings that refuse silence." },
  { title: "Healing", icon: "💛", description: "Trauma-informed spaces for witness." },
  { title: "Prevention", icon: "🛡", description: "Documentation as deterrence." },
  { title: "Solidarity", icon: "✊", description: "Alliances across movements." },
  { title: "Documentation", icon: "📁", description: "Archives that outlast erasure." },
  { title: "Justice", icon: "⚖", description: "Evidence toward accountability." },
] as const;

export const partners = [
  { name: "Activate Rights", logo: "AR" },
  { name: "Omega Research Foundation", logo: "Ω" },
  { name: "UNDP Bangladesh", logo: "UN" },
] as const;

export const finalCta = {
  headline: "Join the festival.",
  button: "Register",
  sub: "Dhaka · 26 June 2026 · Sliding-scale tickets available",
} as const;

export const footer = {
  tagline: "Memory is a form of resistance.",
  legal: `© ${new Date().getFullYear()} ${brand.name}`,
  links: ["Privacy", "Accessibility", "Contact"],
} as const;
