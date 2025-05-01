"use client";

import starIcon from "@/assets/images/starIcon.svg";
import starIconEmpty from "@/assets/images/starIconEmpty.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import leftArrow from "@/assets/images/leftArrow.svg";
import rightArrow from "@/assets/images/rightArrow.svg";
import { Button } from "../ui/button";
interface PeekCarouselProps {
  items: React.ReactNode[];
  className?: string;
  autoPlay?: boolean;
  interval?: number;

  pauseOnHover?: boolean;
}

export function TestimonialsCarousel({
  items,
  className,
  autoPlay = false,
  interval = 5000,

  pauseOnHover = true,
}: PeekCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || !api || isPaused) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, interval);

    return () => clearInterval(intervalId);
  }, [api, autoPlay, interval, isPaused]);
  function onNext() {
    if (current < items.length) {
      api?.scrollTo(current + 1);
    } else {
      api?.scrollTo(0);
    }
  }
  function onPrev() {
    if (current < 1) {
      api?.scrollTo(items.length - 1);
    } else {
      api?.scrollTo(current - 1);
    }
  }
  return (
    <div
      className={cn("w-full px-4 relative", className)}
      onMouseEnter={pauseOnHover ? () => setIsPaused(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setIsPaused(false) : undefined}
    >
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-full  lg:basis-3/5"
            >
              {item}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center items-center gap-4">
          <div className="flex justify-between mt-4 gap-1.5 w-md max-w-full px-7 items-center">
            <Button
              asChild
              onClick={onPrev}
              variant={"ghost"}
              className="flex justify-center items-center      m-0 p-0 hover:bg-transparent"
            >
              <Image src={leftArrow} alt="left arrow" className="text-white" />
            </Button>
            <div className="justify-center items-center gap-1 flex ">
              {items.map((_, index) => (
                <Button
                  className="ml-1 w-12 h-12 p-2 rounded-md flex items-center justify-center hover:bg-transparent"
                  variant="ghost"
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <Image
                    src={index === current ? starIcon : starIconEmpty}
                    alt="star icon"
                    width={24}
                    height={24}
                  />
                </Button>
              ))}
            </div>
            <Button
              variant={"ghost"}
              className="flex justify-center items-center      m-0 p-0 hover:bg-transparent"
              onClick={onNext}
            >
              <Image src={rightArrow} alt="right arrow" />
            </Button>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
