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
    <Card variant={variant} className="h-[310px] overflow-hidden">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 h-full">
        <div className="flex flex-col justify-between items-start  h-full">
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
          <div className="max-sm:hidden">
            <ServiceLink label="Learn more" href={"#"} variant={variant} />
          </div>
        </div>
        <div className="relative h-full w-full flex justify-between items-end md:items-center">
          <div className="sm:hidden">
            <ServiceLink label="Learn more" href={"#"} variant={variant} />
          </div>
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </Card>
  );
}
