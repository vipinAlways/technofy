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
    <header className={`fixed  left-0 w-full z-50 bg-background flex items-center justify-center transition-all duration-200 ease-linear ${topPosition}`}>
      <div className="w-full max-w-7xl  px-3 lg:px-0">
        <Nav />
      </div>
    </header>
  );
}
