"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export default function MyNavBar() {
  const navItems = [
    {
      name: "Home",
      link: "#features",
    },
    {
      name: "Programs",
      link: "#prog",
    },
    {
      name: "Blog",
      link: "#contact",
    },
    {
      name: "Contacts",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let Contact = {
    number:"+254 769 041076",
    WAlink:"https://api.whatsapp.com/send/?phone=%2B254769041076&text&type=phone_number&app_absent=0"

  }
  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo  />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">

            <NavbarButton variant="dark" href={Contact.WAlink}>Hotline : {Contact.number}</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                href={Contact.WAlink}
                variant="primary"
                className="w-full"
              >
                Hotline : {Contact.number}
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Navbar */}
    </div>
  );
}
