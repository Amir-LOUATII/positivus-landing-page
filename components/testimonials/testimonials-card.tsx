export default function TestimonialsCard() {
  return (
    <div className="max-w-[606px] w-full mx-auto px-5">
      <div className="relative bg-[#191A23] rounded-2xl border-2 border-[#B9FF66] min-h-[240px] p-8">
        <p className="text-white text-lg">
          {"We have been working with Positivus for the past year..."}
        </p>

        <div
          className="absolute -bottom-[26px] left-[56px] w-0 h-0 
          border-l-[24px] border-l-transparent 
          border-r-[24px] border-r-transparent 
          border-t-[26px] border-t-[#B9FF66] 
          bg-transparent"
        ></div>

        {/* Background fill inside the triangle */}
        <div
          className="absolute -bottom-[24px] left-[58px] w-0 h-0 
          border-l-[22px] border-l-transparent 
          border-r-[22px] border-r-transparent 
          border-t-[24px] border-t-[#191A23] 
          bg-transparent"
        ></div>
      </div>

      {/* Author Info */}
      <div className="mt-8 ml-[72px]">
        <p className="font-medium text-white">John Smith</p>
        <p className="text-gray-400 text-sm">Marketing Director</p>
      </div>
    </div>
  );
}
