import React from "react";
import Banner from "../../assets/about.jpg";
import ShoppingHeader from "./Header";
import { LocateIcon, MapPin, Phone } from "lucide-react";
import { FaMobile } from "react-icons/fa";
import Footer from "./Footer";

const AboutUs = () => {
  const openGoogleMaps = (address) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <ShoppingHeader />
      <div className="relative mt-4 w-full h-[300px] sm:h-[100px] lg:h-[400px] overflow-hidden">
        <img
          src={Banner}
          alt="About Us Banner"
          className="w-full h-full object-contain opacity-80"
        />
      </div>

      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 text-center mb-12">
            We are committed to providing the best hair care products that are
            100% natural, chemical-free, and promote hair health. Our mission is
            to bring traditional hair care wisdom into modern homes with our
            high-quality hair oils, ensuring a transformative experience for
            your hair.
          </p>

          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 mb-4">
                {/* Add an icon here */}
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm-2 10h4l1-5h-6l1 5zM7 12h10l1 9H6l1-9z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Quality</h3>
              <p className="text-gray-600">
                We prioritize quality in all our products, ensuring that only
                the best ingredients are used to provide effective solutions for
                hair care.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 mb-4">
                {/* Add an icon here */}
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 22s8-4 8-10V6a8 8 0 10-16 0v6c0 6 8 10 8 10z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Natural Ingredients</h3>
              <p className="text-gray-600">
                Our products are made from 100% natural and organic ingredients,
                ensuring that your hair receives the best care without harmful
                chemicals.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 mb-4">
                {/* Add an icon here */}
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c1.054 0 2.072-.816 2.072-1.789C14.072 7.816 13.054 7 12 7c-1.054 0-2.072.816-2.072 2.211C9.928 10.184 10.946 11 12 11zm0 6c2.402 0 4.785-.571 6.641-1.582C20.961 15.034 22 13.214 22 11V7.3c0-.19-.03-.374-.086-.552l-7.928 3.953a2 2 0 01-1.972 0l-7.928-3.953A1.998 1.998 0 002 7.3V11c0 2.214 1.04 4.034 3.359 5.418C7.215 16.429 9.598 17 12 17z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">
                Our customers are our top priority, and we strive to deliver the
                best products and services that exceed their expectations.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Our Story
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 text-center">
            Our journey began with a passion for natural hair care. We saw a
            need for effective, chemical-free hair care solutions and set out to
            create products that combine the best of traditional and modern
            approaches. Today, we are proud to be a trusted name in the
            industry, delivering high-quality, natural hair oils that nourish
            and strengthen hair.
          </p>

          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Our Branches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col items-center text-center">
              <MapPin className="text-green-500" />
              <p className="text-gray-600">
                Branch 1: 18/277, Shop No. 3, in front of Guru Talkies,Ichalkaranji , Taluka Hatkanangale, District Kolhapur 416115
              </p>
              <button
                onClick={() =>
                  openGoogleMaps(
                    " Guru Talkies, Taluka Hatkanangale, District Kolhapur 416115"
                  )
                }
                className="mt-2 bg-green-500 text-white py-2 px-4 rounded"
              >
                Get Directions
              </button>
            </div>
            <div className="flex flex-col items-center text-center">
            <MapPin className="text-green-500" />
              <p className="text-gray-600">
                Branch 2: Collector Office Road, 446/1, Kailas Towers, below B
                News Office, Shop No. G.8, G.9, Kolhapur , Taluka- Karvir , District - Kolhapur.
              </p>
              <button
                onClick={() => openGoogleMaps(" B News Office, Kolhapur")}
                className="mt-2 bg-green-500 text-white py-2 px-4 rounded"
              >
                Get Directions
              </button>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Contact Us
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 text-center mb-12 flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <span className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-green-700" />
              +91 77750 00293
            </span>
            <span className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-green-700" />
              +91 77750 00294
            </span>
          </p>
        </div>
      </section>
     
    </div>
  );
};

export default AboutUs;
