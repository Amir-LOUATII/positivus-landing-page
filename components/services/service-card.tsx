import Image, { type StaticImageData } from "next/image";
import Card from "../ui/card";
import type { CardVariant } from "@/utils/types";
import ServiceLink from "./service-link";
import { Heading } from "../shared/heading";

interface ServiceCardProps {
  variant: CardVariant;
  title: string;
  subtitle: string;
  image: string | StaticImageData;
  priority?: boolean;
  href?: string;
}

export default function ServiceCard({
  variant,
  title,
  subtitle,
  image,

  href = "#",
}: ServiceCardProps) {
  return (
    <Card
      variant={variant}
      className="group overflow-hidden min-h-[280px] lg:min-h-[320px] flex flex-col lg:flex-row transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      {/* Text Section */}
      <div className="flex flex-col justify-between p-4 sm:p-6 lg:p-8 flex-1 min-h-[200px] lg:min-h-0">
        <div className="space-y-2 sm:space-y-3">
          <Heading
            text={title}
            variant={variant === "secondary" ? "primary" : "default"}
          />
          <Heading
            text={subtitle}
            variant={variant === "secondary" ? "primary" : "default"}
          />
        </div>

        {/* Desktop Link */}
        <div className="hidden lg:flex mt-4 lg:mt-6">
          <ServiceLink label="Learn more" href={href} variant={variant} />
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full lg:w-2/5 xl:w-1/2 h-[180px] sm:h-[220px] lg:h-auto lg:min-h-[280px] xl:min-h-[320px]">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${title} service illustration`}
          fill
          className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 40vw, 50vw"
          quality={85}
        />

        {/* Mobile Link Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:hidden" />
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 lg:hidden">
          <ServiceLink label="Learn more" href={href} variant={variant} />
        </div>
      </div>
    </Card>
  );
}
