export function WaveDivider() {
  return (
    <div
      className="relative w-full overflow-hidden z-10"
      style={{ height: "80px" }}
    >
      <svg
        className="absolute top-0 w-full h-full animate-wave"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ minWidth: "200%" }}
      >
        <defs>
          <pattern
            id="wave-pattern"
            x="0"
            y="0"
            width="2400"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,40 C300,10 400,70 600,40 C800,10 900,70 1200,40 C1500,10 1600,70 1800,40 C2000,10 2100,70 2400,40 L2400,80 L0,80 Z"
              fill="#141b3d"
            />
            <path
              d="M0,50 C300,20 400,80 600,50 C800,20 900,80 1200,50 C1500,20 1600,80 1800,50 C2000,20 2100,80 2400,50 L2400,80 L0,80 Z"
              fill="#0a0e27"
              opacity="0.7"
            />
          </pattern>
        </defs>
        <rect width="200%" height="80" fill="url(#wave-pattern)" />
      </svg>
    </div>
  );
}
