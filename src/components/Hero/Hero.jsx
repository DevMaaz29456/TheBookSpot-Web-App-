import React from "react";
import Book1 from "../../assets/books/book4.jpg";
import Book2 from "../../assets/books/book5.jpg";
import Book3 from "../../assets/books/book6.jpg";
import VectorBackground from "../../assets/website/blue-pattern.png";

const books = [
  {
    id: 1,
    img: Book1,
    title: "The Life Changer",
    description:
      "A transformative journey through challenges and triumphs, revealing the beauty of resilience and hope.",
  },
  {
    id: 2,
    img: Book2,
    title: "Whispered Secrets",
    description:
      "Dive into a world of mystery and intrigue where every whisper unravels a hidden truth.",
  },
  {
    id: 3,
    img: Book3,
    title: "The Lost Chronicles",
    description:
      "An adventure of epic proportions, rediscovering lost worlds and untold stories.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const [currentBook, setCurrentBook] = React.useState(books[0]);

  const bgStyle = {
    backgroundImage: `url(${VectorBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <div
      className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
      style={bgStyle}
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Text Content Section */}
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1
              data-aos="zoom-out"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            >
              {currentBook.title}
              <p className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white text-sm">
                by Anonymous
              </p>
            </h1>
            <p
              data-aos="slide-up"
              data-aos-duration="500"
              className="text-sm max-w-[400px] sm:max-w-[600px] mx-auto sm:mx-0"
            >
              {currentBook.description}
            </p>
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white w-[150px] h-[50px] text-center flex justify-center items-center rounded-full mx-auto sm:mx-0"
            >
              Order Now
            </button>
          </div>

          {/* Image Section */}
          <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
              <img
                data-aos="zoom-in"
                src={currentBook.img}
                alt={currentBook.title}
                className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
              />
            </div>
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full p-2">
              {books.map((book) => (
                <img
                  key={book.id}
                  src={book.img}
                  onClick={() => setCurrentBook(book)}
                  alt={book.title}
                  className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
