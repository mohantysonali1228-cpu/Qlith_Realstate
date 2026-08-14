import Testimonials from "../components/Testimonials";
import Features2 from "../components/Features2";


function Home() {
  return (
      <>
    <div>

      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Find Your <span className="text-blue-600">Dream Home</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Discover premium properties at the best locations. Buy, Sell,
              or Rent your perfect home with Realestic.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Explore Properties
              </button>

              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white">
                Contact Us
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800"
              alt="House"
              className="rounded-xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h2 className="text-4xl font-bold text-blue-600">500+</h2>
            <p className="mt-2 text-gray-600">Properties</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h2 className="text-4xl font-bold text-blue-600">200+</h2>
            <p className="mt-2 text-gray-600">Happy Clients</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h2 className="text-4xl font-bold text-blue-600">50+</h2>
            <p className="mt-2 text-gray-600">Expert Agents</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h2 className="text-4xl font-bold text-blue-600">10+</h2>
            <p className="mt-2 text-gray-600">Years Experience</p>
          </div>

        </div>
      </section>

      {/* Featured Properties */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Featured Properties
          </h2>

          <p className="text-center text-gray-600 mt-3">
            Explore our latest premium properties.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800"
                alt="Property"
                className="w-full h-60 object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-bold">
                  Luxury Villa
                </h3>

                <p className="text-gray-600 mt-2">
                  Bhubaneswar, Odisha
                </p>

                <h4 className="text-blue-600 text-2xl font-bold mt-4">
                  ₹1.2 Cr
                </h4>

                <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
                alt="Property"
                className="w-full h-60 object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-bold">
                  Modern Apartment
                </h3>

                <p className="text-gray-600 mt-2">
                  Cuttack, Odisha
                </p>

                <h4 className="text-blue-600 text-2xl font-bold mt-4">
                  ₹85 Lakh
                </h4>

                <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
                alt="Property"
                className="w-full h-60 object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-bold">
                  Family House
                </h3>

                <p className="text-gray-600 mt-2">
                  Puri, Odisha
                </p>

                <h4 className="text-blue-600 text-2xl font-bold mt-4">
                  ₹95 Lakh
                </h4>

                <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto text-center text-white px-6">

          <h2 className="text-4xl font-bold">
            Find Your Dream Home Today
          </h2>

          <p className="mt-5 text-lg">
            Join thousands of happy customers who found their perfect home with
            Realestic.
          </p>

          <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Get Started
          </button>

        </div>
      </section>
      

    </div>
    <Testimonials />
    <Features2 />
    </>

  );
}

export default Home;