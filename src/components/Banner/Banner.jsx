import React from "react";
import BooksStack from "../../assets/website/library.jpg";
import Vector from "../../assets/vector3.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <div
        className="min-h-[550px] bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white py-12 sm:py-0"
        style={bgImage}
      >
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Image Section */}
            <div>
              <img
                src={BooksStack}
                alt="Books Stack"
                className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-lg object-cover rounded-lg"
              />
            </div>
            {/* Text Content Section */}
            <div className="flex flex-col justify-center gap-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-yellow-200">
                Library at Your Fingertips
              </h1>
              <p className="text-sm text-gray-200 tracking-wide leading-6">
                Discover a vast collection of books from various genres, curated
                to suit all your reading preferences. Access your favorite books
                anywhere, anytime, with fast delivery and seamless payment
                options.
              </p>
              <div className="flex flex-col gap-4">
                {/* Feature 1 */}
                <div className="flex items-center gap-4">
                  <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400 text-indigo-700" />
                  <p className="text-base">
                    <strong>Quality Books:</strong> Handpicked, high-quality
                    books ensuring a delightful reading experience.
                  </p>
                </div>
                {/* Feature 2 */}
                <div className="flex items-center gap-4">
                  <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400 text-orange-700" />
                  <p className="text-base">
                    <strong>Fast Delivery:</strong> Get your books delivered
                    quickly to your doorstep.
                  </p>
                </div>
                {/* Feature 3 */}
                <div className="flex items-center gap-4">
                  <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400 text-green-700" />
                  <p className="text-base">
                    <strong>Easy Payment:</strong> Hassle-free payment methods
                    for a seamless experience.
                  </p>
                </div>
                {/* Feature 4 */}
                <div className="flex items-center gap-4">
                  <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400 text-yellow-700" />
                  <p className="text-base">
                    <strong>Exciting Offers:</strong> Enjoy discounts and
                    special deals on a wide range of books.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
