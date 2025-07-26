export const XDSLogo = ({ className = "h-8" }: { className?: string }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="flex items-center bg-gray-100 px-3 py-1 rounded-lg">
        <span className="bg-xds-yellow text-black font-bold px-2 py-0.5 rounded text-sm mr-1">L</span>
        <span className="bg-xds-red text-white font-bold px-2 py-0.5 rounded text-sm mr-1">P</span>
        <span className="bg-xds-green text-white font-bold px-2 py-0.5 rounded text-sm mr-2">P</span>
        <span className="text-xds-orange font-bold text-xl">XDS</span>
      </div>
    </div>
  );
};
