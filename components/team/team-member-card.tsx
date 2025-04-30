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
      <header className="flex justify-start items-start">
        <div className="flex justify-start items-end gap-2 flex-1">
          <div className="w-[90px] h-[90px] relative">
            <Image src={image} alt={`Image of ${name}`} priority fill />
          </div>
          <div>
            <h4 className="font-medium text-xl">{name}</h4>
            <p className=" text-nowrap">{position}</p>
          </div>
        </div>
        <a href="#" className="w-[34px] h-[34px] relative shrink-0">
          <Image src={linkedInIcon} alt="linkedin icon" fill priority />
        </a>
      </header>
      <hr className="h-0.5 bg-dark w-full my-7" />
      <p className="text-lg">{description}</p>
    </Card>
  );
}
