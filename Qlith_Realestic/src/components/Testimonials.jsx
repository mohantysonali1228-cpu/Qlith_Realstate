import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import person1 from "../assets/picture1.jpg";
import person2 from "../assets/picture2.jpg";
import person3 from "../assets/picture3.jpg";

const testimonials = [
  {
    image: person1,
    name: "Chris Daren",
    location: "Tokyo, Japan",
    review:
      "Realestic made purchasing our dream home effortless and pleasant. A top choice for first-time homebuyers!",
  },
  {
    image: person2,
    name: "Sarah Smith",
    location: "New York, USA",
    review:
      "Professional service, friendly staff and an amazing experience from start to finish.",
  },
  {
    image: person3,
    name: "John William",
    location: "London, UK",
    review:
      "Highly recommended! They helped us find the perfect home within our budget.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">

      <div className="text-center mb-12">
        <p className="text-[#3C83F6] font-semibold">
          • Testimonials
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Real feedback from our
          <br />
          satisfied clients
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="max-w-5xl"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>

            <div className="bg-[#3C83F6] rounded-[40px] p-26 flex items-center gap-10">

              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-40 rounded-full object-cover"
              />

              <div className="text-white">

                <p className="text-3xl leading-relaxed">
                  {item.review}
                </p>

                <h3 className="text-3xl font-bold mt-8">
                  {item.name}
                </h3>

                <p className="text-xl opacity-80">
                  {item.location}
                </p>

              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}