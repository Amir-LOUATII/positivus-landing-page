import Image from "next/image";
import Button from "../ui/button";
import Card from "../ui/card";
import bannerImage from "@/assets/images/bannerImage.png";
export default function MainBanner() {
  return (
    <section className="w-full container mx-auto mb-40">
      <Card
        variant="secondary"
        shadow={false}
        className="p-[60px] grid grid-cols-1 md:grid-cols-2 gap-14 min-h-[347px]"
      >
        <div>
          <h3 className="text-[30px] font-medium ">Let’s make things happen</h3>
          <p className="text-lg my-6">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Button variant="dark">Get your free proposal</Button>
        </div>
        <div className="flex-1/2 relative h-full max-md:hidden">
          <Image
            src={bannerImage}
            alt="banner-image"
            className=" absolute  top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2"
          />
        </div>
      </Card>
    </section>
  );
}
