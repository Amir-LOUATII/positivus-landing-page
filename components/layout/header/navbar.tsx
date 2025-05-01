import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import Nav from "./nav";

export default function Navbar() {
  return (
    <header className="h-[68px] py-2 w-full mx-auto max-w-full px-3.5">
      <div
        className="container mx-auto px-2
       flex justify-between items-center gap-8 max-w-full"
      >
        <Logo />
        <Nav />
        <MobileMenu />
      </div>
    </header>
  );
}
