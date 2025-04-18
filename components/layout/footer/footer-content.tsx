import Badge from "../ui/badge";

export default function FooterContent() {
  return (
    <div className="flex max-md:flex-col max-md:justify-center justify-between max-md:items-center items-start gap-10 lg:gap-[154px] mb-12 ">
      <div>
        <Badge>
          <p className="text-xl">Contact us:</p>
        </Badge>
        <div className="space-y-5 text-white mt-7 max-w-[332px]">
          <div className="flex gap-2">
            <span>Email:</span>
            <span>info@positivus.com</span>
          </div>
          <div className="flex gap-2">
            <span>Phone:</span>
            <span>555-567-8901</span>
          </div>
          <div className="flex gap-2">
            <address className="not-italic text-wrap">
              Address: 1234 Main St Moonstone City, Stardust State 12345
            </address>
          </div>
        </div>
      </div>
      <div className="!flex-1 bg-[#292A32] py-14 px-10 flex justify-center items-center max-w-full">
        <div className="w-full flex justify-center items-center gap-5  max-w-full flex-wrap ">
          <input
            type="text"
            className="h-[68px] border border-white rounded-[14px]shadow-md text-white pl-9 text-lg placeholder:text-white max-w-full w-[285px]"
            placeholder="Email"
          />
          <button className="h-[68px] bg-primary rounded-md leading-[0.28] text-nowrap px-9 max-w-full w-[285px]">
            Subscribe to news
          </button>
        </div>
      </div>
    </div>
  );
}
