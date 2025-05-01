import React from "react";
import Card from "../ui/card";
import Image, { StaticImageData } from "next/image";
import linkedInIcon from "@/assets/images/linkedInIcon.svg";
type TeamMemberCardProps = {
  name: string;
  position: string;
  image: StaticImageData;
  description: string;
};
export default function TeamMemberCard({
  name,
  position,
  image,
  description,
}: TeamMemberCardProps) {
  return (
    <Card variant="default" className="p-[40px] px-[35px]">
      <header className="flex justify-between items-start flex-wrap gap-4">
        <div className="flex items-end gap-3 min-w-0">
          <div className="w-[90px] h-[90px] relative shrink-0">
            <Image
              src={image}
              alt={`Image of ${name}`}
              priority
              fill
              sizes="(max-width: 768px) 90px, 90px"
              className="object-cover rounded-full"
            />
          </div>
          <div className="min-w-0">
            <h2 className="font-medium text-xl truncate">{name}</h2>
            <p className="whitespace-nowrap text-sm text-gray-600 truncate">
              {position}
            </p>
          </div>
        </div>
        <a href="#" className="w-[34px] h-[34px] relative shrink-0">
          <Image
            src={linkedInIcon}
            alt="LinkedIn icon"
            fill
            sizes="34px"
            className="object-contain"
          />
        </a>
      </header>

      <hr className="h-0.5 bg-dark w-full my-7" />
      <p className="text-lg">{description}</p>
    </Card>
  );
}
