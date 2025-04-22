"use client";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Card from "../ui/card";
import StudyCard from "./study-card";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
type StudiesCarouselProps = {
  studies: { text: string; link: string }[];
};
export default function StudiesCarousel({ studies }: StudiesCarouselProps) {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="w-full">
        {studies.map((study) => (
          <CarouselItem key={study.text}>
            <Card variant="dark" shadow={false} className="min-w-full">
              <StudyCard text={study.text} externalLink={study.link} />
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
