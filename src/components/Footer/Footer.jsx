import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import footerLogo from "../../assets/website/logo.png";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-blue-700 to-purple-800 text-white py-10">
      <section className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Details */}
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-3 mb-4">
              {/* <img src={footerLogo} alt="Logo" className="max-w-[50px]" /> */}
              TheBookSpot
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover your favorite books and explore new genres with our
              curated collection. Let your reading journey begin with us!
            </p>
            <div className="flex items-center gap-3 mt-5">
              <FaLocationArrow className="text-primary" />
              <p className="text-sm">UET Mardan KPK, Pakistran</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt className="text-primary" />
              <p className="text-sm">+92 3421179168</p>
            </div>
            {/* Social Media Links */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="hover:text-yellow-400">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="hover:text-blue-500">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="#" className="hover:text-blue-500">
                <FaGithub className="text-2xl" />
              </a>
              <a href="#" className="hover:text-blue-500">
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Important Links</h2>
              <ul className="space-y-3">
                {FooterLinks.map(({ title, link }) => (
                  <li key={title} className="text-sm">
                    <a
                      href={link}
                      className="flex items-center gap-2 hover:text-yellow-400 transition duration-300"
                    >
                      <span>&#11162;</span>
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-3">
                {FooterLinks.map(({ title, link }) => (
                  <li key={title} className="text-sm">
                    <a
                      href={link}
                      className="flex items-center gap-2 hover:text-yellow-400 transition duration-300"
                    >
                      <span>&#11162;</span>
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Location Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Location</h2>
            <ul className="space-y-3">
              {FooterLinks.map(({ title, link }) => (
                <li key={title} className="text-sm">
                  <a
                    href={link}
                    className="flex items-center gap-2 hover:text-yellow-400 transition duration-300"
                  >
                    <span>&#11162;</span>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center py-5 mt-8 border-t border-gray-600">
          <p className="text-sm">&copy; 2024 All rights reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
