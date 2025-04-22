import Image from "next/image";
import React from "react";
import externalLink from "@/assets/images/darkExternalLinkPrimary.svg";
export default function CaseExternalLink({ link }: { link: string }) {
  return (
    <div className="flex justify-start items-center gap-3.5">
      {" "}
      <a href={link} className="text-primary text-lg">
        Learn more
      </a>
      <Image src={externalLink} alt="external link icon" />
    </div>
  );
}
