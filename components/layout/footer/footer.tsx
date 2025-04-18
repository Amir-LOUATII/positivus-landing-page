import React from "react";
import FooterHeader from "./footer-header";
import FooterContent from "./footer-content";
import FooterFooter from "./footer-footer";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="container bg-dark px-[60px] pt-14 mx-auto rounded-t-xl pb-12">
        <FooterHeader />
        <FooterContent />
        <FooterFooter />
      </div>
    </footer>
  );
}
