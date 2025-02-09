import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu on mobile after clicking
    }
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-gray-900">
          Gixus
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection("home")} className="hover:text-blue-600">Home</button>
          <button onClick={() => scrollToSection("about")} className="hover:text-blue-600">About</button>
          <button onClick={() => scrollToSection("services")} className="hover:text-blue-600">Services</button>
          <button onClick={() => scrollToSection("process")} className="hover:text-blue-600">Process</button>
          <button onClick={() => scrollToSection("blog")} className="hover:text-blue-600">Blog</button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-blue-600">Contact</button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full py-4">
          <button onClick={() => scrollToSection("home")} className="block px-6 py-2 hover:bg-gray-100">Home</button>
          <button onClick={() => scrollToSection("about")} className="block px-6 py-2 hover:bg-gray-100">About</button>
          <button onClick={() => scrollToSection("services")} className="block px-6 py-2 hover:bg-gray-100">Services</button>
          <button onClick={() => scrollToSection("projects")} className="block px-6 py-2 hover:bg-gray-100">Projects</button>
          <button onClick={() => scrollToSection("blog")} className="block px-6 py-2 hover:bg-gray-100">Blog</button>
          <button onClick={() => scrollToSection("contact")} className="block px-6 py-2 hover:bg-gray-100">Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
