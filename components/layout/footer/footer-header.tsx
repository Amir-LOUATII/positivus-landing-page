import React from "react";
import FooterLogo from "./footer-logo";
import FooterSocials from "./footer-socials";
import FooterMenu from "./footer-menu";

export default function FooterHeader() {
  return (
    <header className="w-full flex justify-between items-center  mb-16">
      <FooterLogo />
      <FooterMenu />
      <FooterSocials />
    </header>
  );
}
