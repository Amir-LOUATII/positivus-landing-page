import { ReactNode } from "react";

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <div className="flex bg-primary rounded-sm p-0.5 w-fit">{children}</div>
  );
}
