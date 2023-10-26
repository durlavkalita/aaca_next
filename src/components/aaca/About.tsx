import React from "react";
import image1 from "../../assets/aaca_1.jpg";
import image2 from "../../assets/aaca_2.jpg";
import image3 from "../../assets/aaca_3.jpg";
import image4 from "../../assets/aaca_4.jpg";

export default function About() {
  return (
    <div className="container mx-auto px-4 md:px-8 flex flex-wrap items-center">
      {/* <!-- Left Column (Text) --> */}
      <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
        <p className="text-gray-600 leading-relaxed">
          The All Assam Chess Association (Assamese: সদৌ অসম দবা সন্থা) is a
          registered (under the Societies Registration Act: XXI of 1860, Number
          1347 of 1981–82) chess association of the Assam state of India. It was
          formed in the late 1960s by Bodiyuz Zaman from Jorhat. The first
          president of the association was Kamakhya Prasad Tripathi. It is
          affiliated with the All India Chess Federation and officially
          accredited by the Fédération Internationale des Échecs.
        </p>
      </div>

      {/* <!-- Right Column (Images) --> */}
      <div className="w-full md:w-1/2 px-4 flex flex-wrap -mx-2 items-center">
        {/* <!-- Image 1 --> */}
        <div className="w-1/2 md:w-1/2 px-2 mb-4">
          <img src={image1} alt="Image 1" className="rounded-lg" />
        </div>

        {/* <!-- Image 2 --> */}
        <div className="w-1/2 md:w-1/2 px-2 mb-4">
          <img src={image2} alt="Image 2" className="rounded-lg" />
        </div>

        {/* <!-- Image 3 --> */}
        <div className="w-1/2 md:w-1/2 px-2 mb-4">
          <img src={image3} alt="Image 3" className="rounded-lg" />
        </div>

        {/* <!-- Image 4 --> */}
        <div className="w-1/2 md:w-1/2 px-2 mb-4">
          <img src={image4} alt="Image 4" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}
