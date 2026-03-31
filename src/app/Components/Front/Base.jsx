export default function Base({ children }) {
  return (
    <div className="min-h-screen bg-[#0a0e27] text-[#f5e6d3] pt-24 pb-16 px-1 md:px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-10">{children}</div>
    </div>
  );
}
