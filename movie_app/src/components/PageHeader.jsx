function PageHeader({ icon, title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <div className="inline-block mb-6">
        <span className="text-8xl inline-block hover:scale-125 transition-transform duration-500">
          {icon}
        </span>
      </div>
      <h1 className="text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 leading-tight">
        {title}
      </h1>
      <p className="text-2xl text-gray-600 flex items-center justify-center gap-3 mt-4">
        {subtitle}
      </p>
    </div>
  );
}

export default PageHeader;
