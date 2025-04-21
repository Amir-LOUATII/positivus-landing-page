import { ReactNode } from "react";

export default function SectionHeader({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex justify-start  items-center container mx-auto gap-x-10 flex-wrap gap-y-2.5">
      <h2 className="text-[40px] font-medium bg-primary rounded-sm px-1">
        {title}
      </h2>
      {children}
    </div>
  );
}
