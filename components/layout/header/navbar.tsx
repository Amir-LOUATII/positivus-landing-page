import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import Nav from "./nav";

export default function Navbar() {
  return (
    <header className="h-[68px] py-2 w-full">
      <div
        className="container mx-auto px-2
       flex justify-between items-center gap-10"
      >
        <Logo />
        <Nav />
        <MobileMenu />
      </div>
    </header>
  );
}
