import Image from "next/image";

import heroImage from "@/assets/images/heroImage.svg";

export default function HeroImage() {
  return (
    <div className="w-full max-md:max-w-[340px] mx-auto px-4">
      <Image
        src={heroImage}
        alt="Hero image"
        className="w-full h-auto object-contain"
        sizes="(max-width: 768px) 100vw, 360px"
        priority
      />
    </div>
  );
}
