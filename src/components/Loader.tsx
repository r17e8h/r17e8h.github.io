export default function Loader({ isExiting }: { isExiting: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden transition-transform duration-700 ease-in-out ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <video
        className="w-48 h-48 object-contain block md:hidden"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src="/flower-mobile.mp4" type="video/mp4" />
      </video>

      <video
        className="w-80 h-80 lg:w-96 lg:h-96 object-contain hidden md:block"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src="/flower-desktop.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
