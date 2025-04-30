import Image from "next/image";
import React from "react";
import footerLogo from "@/assets/images/footerLogo.svg";

export default function FooterLogo() {
  return <Image src={footerLogo} alt="footer-logo" />;
}
