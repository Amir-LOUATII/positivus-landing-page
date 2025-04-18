import React from "react";
import FooterHeader from "./footer-header";
import FooterContent from "./footer-content";
import FooterFooter from "./footer-footer";
import FooterSocials from "./footer-socials";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="container bg-dark px-[60px] pt-14 mx-auto rounded-t-xl pb-12">
        <FooterHeader />
        <FooterContent />
        <div className="md:hidden py-3 w-full justify-center items-center">
          <FooterSocials />
        </div>
        <FooterFooter />
      </div>
    </footer>
  );
}
