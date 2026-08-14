const Hero = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        <div>
          <p className="text-blue-600 font-semibold uppercase">
            Real Estate
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
            Find the home that fits
            <span className="text-blue-500"> your life perfectly</span>
          </h1>

          <p className="mt-6 text-gray-600">
            Buy, sell and rent premium properties with trusted agents.
          </p>

          <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700">
            Explore Properties
          </button>
        </div>

        <div>
          <img
            src="/hero.jpg"
            alt="Hero"
            className="rounded-3xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;