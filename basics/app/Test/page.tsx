import { FloatingNav } from "@/components/ui/floating-navbar";
import { ContactIcon, HomeIcon, InfoIcon } from "lucide-react";

export default function TestPage() {
  const navItems = [
    { name: 'Home', link: '/', icon: <HomeIcon className="w-4 h-4" /> },
    { name: 'About', link: '/about', icon: <InfoIcon className="w-4 h-4" /> },
    { name: 'Contact', link: '/contact', icon: <ContactIcon className="w-4 h-4" /> },
  ];

  return <FloatingNav navItems={navItems} />;
}
