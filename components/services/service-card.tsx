import Image, { StaticImageData } from "next/image";
import Card from "../ui/card";
import { CardVariant } from "@/utils/types";
import ServiceLink from "./service-link";
import { Heading } from "../shared/heading";

export default function ServiceCard({
  variant,
  title,
  subtitle,
  image,
}: {
  variant: CardVariant;
  title: string;
  subtitle: string;
  image: string | StaticImageData;
}) {
  return (
    <Card
      variant={variant}
      className="overflow-hidden h-auto md:h-[310px] flex flex-col md:flex-row"
    >
      {/* Text Section */}
      <div className="flex flex-col justify-between p-4 flex-1">
        <div>
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
        <div className="hidden md:block mt-4">
          <ServiceLink label="Learn more" href="#" variant={variant} />
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-[200px] md:h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        {/* Mobile Link */}
        <div className="absolute bottom-4 left-4 md:hidden">
          <ServiceLink label="Learn more" href="#" variant={variant} />
        </div>
      </div>
    </Card>
  );
}
