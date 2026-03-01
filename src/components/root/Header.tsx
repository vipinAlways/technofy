"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Nav from "./Nav";

export default function Header() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topPosition = !scrolled ? "top-6" : "top-0";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${topPosition}`}
    >
      <div className="max-w-7xl mx-auto ">
        <Nav />
      </div>
    </header>
  );
}
