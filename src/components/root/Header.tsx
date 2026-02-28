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
      className={`fixed  flex items-center  justify-center left-1/2 -translate-x-1/2  pl-16 pr-12  max-w-7xl  w-full  z-50 transition-all duration-300 ${topPosition}`}
    >
      <Nav />
    </header>
  );
}
