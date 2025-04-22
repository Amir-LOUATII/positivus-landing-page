"use client";
import React, { useState } from "react";
import Card from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import plusIcon from "@/assets/images/plusIcon.svg";
import minusIcon from "@/assets/images/minusIcon.svg";
type ProcessCardProps = {
  step: string;
  title: string;
  description: string;
};
export default function ProcessCard({
  step,
  title,
  description,
}: ProcessCardProps) {
  const [expanded, setExpanded] = useState(false);
  function toggleExpanded() {
    setExpanded((prevState) => !prevState);
  }
  return (
    <Card
      variant={expanded ? "primary" : "secondary"}
      className="transition-colors duration-75"
    >
      <header className="flex justify-between">
        <div className="flex justify-start items-center gap-6">
          <p className="font-medium text-6xl">{step}</p>
          <p className="font-medium text-3xl">{title}</p>
        </div>
        <Button
          variant={"ghost"}
          className="rounded-full bg-white hover:bg-white flex justify-center items-center w-14 h-14 border-dark"
          onClick={toggleExpanded}
        >
          <Image
            src={expanded ? minusIcon : plusIcon}
            alt={expanded ? "minus icon" : "plus icon"}
          />
        </Button>
      </header>
      <hr className="w-full my-[30px] h-0.5 bg-dark" />
      {expanded && <p className="text-lg">{description}</p>}
    </Card>
  );
}
