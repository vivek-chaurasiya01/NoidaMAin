const PageBanner = ({ title, breadcrumb, bgImage }) => {
  return (
    <section
      className="
        w-full h-[150px]
        bg-cover bg-center bg-no-repeat
        md:bg-fixed
        relative flex items-center justify-center
      "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
 <div className="max-w-7xl flex ">
        <div className="relative z-10 w-full text-white flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl font-bold uppercase">{title}</h1>

        <p className="mt-2 text-sm text-gray-300">
          Home / <span className="text-[#d2aa73]">{breadcrumb}</span>
        </p>
      </div>
 </div>
    </section>
  );
};

export default PageBanner;
