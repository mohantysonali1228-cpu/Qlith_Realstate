import React from "react";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import contactImg from "../assets/contact.jpg";

const Contact = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center">
          <span className="px-5 py-2 bg-blue-100 text-blue-600 rounded-full font-medium">
            Contact
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-5xl font-bold mt-6 leading-tight">
          Get in touch with us today for
          <br />
          expert{" "}
          <span className="text-blue-500">
            assistance
          </span>
        </h2>

        {/* Image + Contact Card */}
        <div className="relative mt-14">

          <img
            src={contactImg}
            alt=""
            className="w-full h-[650px] object-cover rounded-3xl"
          />

          {/* Floating Card */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-3xl shadow-xl px-10 py-8">

            <div className="grid md:grid-cols-3 gap-8">

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="text-blue-500 mt-1" />
                <div>
                  <p className="text-gray-500 text-sm">
                    email address:
                  </p>
                  <p className="text-lg font-semibold">
                    testing@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="text-blue-500 mt-1" />
                <div>
                  <p className="text-gray-500 text-sm">
                    phone number:
                  </p>
                  <p className="text-lg font-semibold">
                    +123 45 67 89
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-500 mt-1" />
                <div>
                  <p className="text-gray-500 text-sm">
                    Location
                  </p>
                  <p className="text-lg font-semibold">
                    Doha, Qatar
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;