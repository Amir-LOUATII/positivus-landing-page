import Image from "next/image";
import React from "react";

import heroImage from "@/assets/images/heroImage.svg";
export default function HeroImage() {
  return <Image src={heroImage} alt="Hero image" className="max-w-full " />;
}
