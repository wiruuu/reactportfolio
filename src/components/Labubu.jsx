export const Labubu = () => {
  return (
    <div className=" p-10 flex">
      {/* Canvas wrapper */}
      <div
        className="relative drop-shadow-xl"
        style={{ width: 340, height: 520 }}
      >
        {/* ===== SHADOW ===== */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-60 h-6 bg-black/10 rounded-full blur-md" />

        {/* ===== EARS ===== */}
        {/* Left ear */}
        <div className="absolute -top-6 left-12 rotate-[-10deg]">
          <div className="relative w-28 h-44 bg-[#F9DCC4] rounded-[60%_60%_50%_50%/75%_75%_50%_50%] border-4 border-[#D9BBA3]">
            <div className="absolute inset-[18%] bg-[#FFB4C0] rounded-[55%_55%_45%_45%/70%_70%_45%_45%]" />
          </div>
        </div>
        {/* Right ear */}
        <div className="absolute -top-6 right-12 rotate-[10deg]">
          <div className="relative w-28 h-44 bg-[#F9DCC4] rounded-[60%_60%_50%_50%/75%_75%_50%_50%] border-4 border-[#D9BBA3]">
            <div className="absolute inset-[18%] bg-[#FFB4C0] rounded-[55%_55%_45%_45%/70%_70%_45%_45%]" />
          </div>
        </div>

        {/* ===== HEAD ===== */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[300px] h-[260px] bg-[#FBE3C8] rounded-full border-4 border-[#D9BBA3]">
          {/* Forehead shine */}
          <div className="absolute left-12 top-8 w-22 h-10 bg-white/50 rounded-full blur-[2px] rotate-[-6deg]" />
          <div className="absolute left-40 top-8 w-22 h-10 bg-white/50 rounded-full blur-[2px] rotate-[6deg]" />

          {/* Eyes */}
          <div className="absolute left-[58px] top-[76px] w-20 h-18 bg-black rounded-full rotate-6">
            <div className="absolute left-3 top-4 w-5 h-5 bg-white rounded-full" />
            <div className="absolute right-4 bottom-6 w-3 h-3 bg-white/80 rounded-full" />
          </div>
          <div className="absolute right-[58px] top-[76px] w-20 h-18 bg-black rounded-full -rotate-6">
            <div className="absolute left-3 top-4 w-5 h-5 bg-white rounded-full" />
            <div className="absolute right-4 bottom-6 w-3 h-3 bg-white/80 rounded-full" />
          </div>

          {/* Brows / eye ridge (subtle) */}
          <div className="absolute left-12 top-[56px] w-28 h-6 bg-[#EFD3B6] rounded-full -rotate-6" />
          <div className="absolute right-12 top-[56px] w-28 h-6 bg-[#EFD3B6] rounded-full rotate-6" />

          {/* Nose */}
          <div className="absolute top-[140px] left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FFB4C0] rounded-full" />

          {/* Cheeks */}


          {/* Mouth container */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[22px] w-60 h-18">
            {/* Lip */}

            {/* Teeth rows (total 9 around the mouth) */}
            {/* Mouth: bottom half of a semi-ellipse (filled) */}
                {/* Mouth: bottom half of a semi-ellipse outline */}
                {/* Mouth: full bottom half of a semi-ellipse outline (no clipping) */}
<div className="absolute left-1/2 -translate-x-1/2 bottom-[22px] w-60 h-45 pointer-events-none rotate-180">
  <svg
    className="block w-full h-full"
    viewBox="0 0 160 80"
    fill="none"
    preserveAspectRatio="xMidYMid meet"
  >
    {/* Bottom semi-ellipse arc inside the viewBox */}
    <path
      d="M 4 41.8 A 50 30 0 0 1 156 41.8"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />

    {/* 9 teeth, bases on the arc, pointing outward (down on the bottom arc) */}
    {
      Array.from({ length: 9 }).map((_, i) => {
        const cx = 80, cy = 35, rx =75, ry = 39.5;
        const t = (i+1) / 10;                         // 0..1 from left to right
        const theta = Math.PI * (1 - t);         // π (left) -> 0 (right)

        // Point on ellipse
        const x = cx - rx * Math.cos(theta);
        const y = cy - ry * Math.sin(theta);

        // Outward normal angle for ellipse: atan2( sinθ/ry, cosθ/rx )
        const angRad = Math.atan2(Math.sin(theta) / ry, Math.cos(theta) / rx);
        const angDeg = angRad * 180 / Math.PI;

        const baseWidth = 14; // width at the gum line
        const toothLen  = 13; // length from base to tip along the normal

        return (
          <g key={i} transform={`translate(${x}, ${y}) rotate(${angDeg + 90})`}>
            {/* Base centered at the arc point, apex along +local y (outward normal) */}
            <polygon
              points={`${-baseWidth/2},0 ${baseWidth/2},0 0,${toothLen}`}
              fill="white"
            />
          </g>
        );
      })
    }
  </svg>
</div>






            {/* Tongue */}
            
            </div>
        </div>

        {/* ===== BODY ===== */}
        <div className="absolute top-[280px] left-1/2 -translate-x-1/2 w-[220px] h-[180px] bg-[#FBE3C8] rounded-[80px] border-4 border-[#D9BBA3]">
          {/* Belly */}
          <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[140px] h-[120px] bg-[#FFF3E3] rounded-full" />
        </div>

        {/* Arms */}
        <div className="absolute top-[300px] left-3 w-20 h-24 bg-[#FBE3C8] rounded-[60px] border-4 border-[#D9BBA3] -rotate-[12deg]" />
        <div className="absolute top-[300px] right-3 w-20 h-24 bg-[#FBE3C8] rounded-[60px] border-4 border-[#D9BBA3] rotate-[12deg]" />

        {/* Feet */}
        <div className="absolute bottom-6 left-24 w-16 h-18 bg-[#FBE3C8] rounded-full border-4 border-[#D9BBA3]">
        
        </div>

        <div className="absolute bottom-6 right-24 w-16 h-18 bg-[#FBE3C8] rounded-full border-4 border-[#D9BBA3]" />

      </div>

    </div>
  );
}
