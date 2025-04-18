import React from "react";
import FooterLogo from "./footer-logo";
import FooterSocials from "./footer-socials";
import FooterMenu from "./footer-menu";

export default function FooterHeader() {
  return (
    <header className="w-full flex justify-between items-center lg:items-start max-lg:flex-col mb-16 ">
      <FooterLogo />
      <div
        className="lg:self-end flex justify-center items-center gap-10
      "
      >
        <FooterMenu />
        <div className="max-md:hidden">
          <FooterSocials />
        </div>
      </div>
    </header>
  );
}
