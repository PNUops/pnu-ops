"use client";

import Header from "@/components/layout/Header";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const assetPrefix =
    process.env.NODE_ENV === "production" ? "/pnu-ops" : "";

  const backgroundUrl = `${assetPrefix}/backgrounds/bg-home-hero.webp`;

  const wrapperClassName = isHome
    ? "bg-cover relative min-h-screen overflow-hidden bg-bg-default text-text-primary"
    : "min-h-screen bg-bg-default text-text-primary";

  return (
    <ParallaxProvider>
      <div
        className={wrapperClassName}
        style={isHome ? { backgroundImage: `url(${backgroundUrl})` } : undefined}
      >
        {isHome && (
          <Parallax
            speed={-20}
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <Image
              src={backgroundUrl}
              alt="PNUops background"
              fill
              priority
              className="object-cover"
            />
          </Parallax>
        )}

        <Header />
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          {children}
        </div>
      </div>
    </ParallaxProvider>
  );
}
