"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navItems = [
  // { href: "/about", label: "ABOUT" },
  { href: "/work", label: "WORKS" },
  // { href: "/member", label: "MEMBERS" },
];

const assetPrefix = process.env.NODE_ENV === "production" ? "/pnu-ops" : "";

const logos = [
  {
    src: `${assetPrefix}/logos/lg-pnuops-default.png`,
    alt: "PNUops main logo",
  },
  {
    src: `${assetPrefix}/logos/lg-pnuops-point.png`,
    alt: "PNUops point logo",
  },
];

export default function Header() {
  const [logoIndex, setLogoIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current && currentY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    setLogoIndex(1);
  };

  const handleLogoHoverEnter = () => {
    setLogoIndex(1);
  };

  const handleLogoHoverLeave = () => {
    setLogoIndex(0);
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 h-20 bg-transparent transition-transform duration-300 md:h-24 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2"
          onClick={handleLogoClick}
          onMouseEnter={handleLogoHoverEnter}
          onMouseLeave={handleLogoHoverLeave}
        >
          <div className="relative h-10 w-35 overflow-hidden">
            {logos.map((logo, index) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="140px"
                priority
                className={`object-contain transition-opacity duration-400 ${
                  logoIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </Link>

        <nav className="flex items-center gap-8 px-6 text-xs font-medium tracking-[0.18em] text-blue-200 sm:text-sm md:text-base">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-text-brand focus-visible:ring-border-focus focus-visible:ring-offset-bg-default w-14 uppercase transition-colors duration-200 hover:font-black focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:w-16 md:w-20"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
