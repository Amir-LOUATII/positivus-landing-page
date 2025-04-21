import { CardVariant } from "@/utils/types";
import Image, { StaticImageData } from "next/image";
import primaryExternalLink from "@/assets/images/darkExternalLinkPrimary.svg";
import secondaryExternalLink from "@/assets/images/darkExternalLinkPrimary.svg";
import darkExternalLink from "@/assets/images/defaultExternalLink.svg";
export default function ServiceLink({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: CardVariant;
}) {
  const images: Record<Exclude<CardVariant, "default">, StaticImageData> = {
    primary: primaryExternalLink,
    secondary: secondaryExternalLink,
    dark: darkExternalLink,
  };
  return (
    <a href={href} className="flex justify-center items-center">
      {variant in images && (
        <Image
          priority
          src={images[variant as Exclude<CardVariant, "default">]}
          width={41}
          height={41}
          alt="external Link"
        />
      )}
      <span className="text-lg leading-[0.28] pl-3.5 max-md:hiddenP">
        {label}
      </span>
    </a>
  );
}
