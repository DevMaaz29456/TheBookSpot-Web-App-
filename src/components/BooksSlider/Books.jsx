import React from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Who's There",
    rating: 5.0,
    author: "Michael Trent",
  },
  {
    id: 2,
    img: Book2,
    title: "His Life",
    rating: 4.5,
    author: "John Doe",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost Boys",
    rating: 4.7,
    author: "Emily Rose",
  },
  {
    id: 4,
    img: Book2,
    title: "Finding Home",
    rating: 4.4,
    author: "Sophia Lee",
  },
  {
    id: 5,
    img: Book1,
    title: "Beyond the Stars",
    rating: 4.8,
    author: "James Carter",
  },
];

const Books = () => {
  return (
    <>
      <div className="mt-14 mb-12 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 py-10 text-white">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              Discover Your Next Favorite Read
            </p>
            <h1 className="text-3xl font-bold">Top Picks for Book Lovers</h1>
            <p className="text-sm text-gray-200">
              Explore a curated collection of highly-rated books from diverse
              genres and authors.
            </p>
          </div>

          {/* Body Section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {/* Card */}
              {booksData.map(({ id, img, title, rating, author }) => (
                <div
                  key={id}
                  className="bg-white text-gray-800 rounded-md p-4 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                >
                  <img
                    src={img}
                    alt={title}
                    className="h-[220px] w-[150px] object-cover rounded-md mx-auto"
                  />
                  <div className="text-center mt-3">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="text-sm text-gray-600">{author}</p>
                    <div className="flex justify-center items-center gap-1 mt-1">
                      <FaStar className="text-yellow-500" />
                      <span>{rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300">
                View All Books
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
