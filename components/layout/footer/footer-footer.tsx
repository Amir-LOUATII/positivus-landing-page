import React from "react";

export default function FooterFooter() {
  return (
    <footer className="w-full h-20 flex items-end justify-start gap-10 border-t border-white">
      <p className="text-white text-lg leading-[0.28]">
        © 2023 Positivus. All Rights Reserved.
      </p>
      <a
        href="#"
        className=" text-white text-lg leading-[0.28]  decoration-1 capitalize underline underline-offset-2 hover:text-primary transition-colors duration-150 "
      >
        privacy policy
      </a>
    </footer>
  );
}
