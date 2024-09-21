import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import Cart from "../Cart";
import { Bars3Icon, SunIcon } from "@heroicons/react/24/outline";
import MobileMenuModal from "../MobileMenuModal";
import useTheme from "../../hooks/useTheme"; // Importing the useTheme hook
import { useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); // Using the custom theme hook
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <div
        className={
          "bg-slate-200 dark:bg-gray-900 fixed w-full h-[60px] md:h-[80px] px-[5%] md:px-[10%] border-b border-slate-50/[0.10] flex items-center justify-between z-10 shadow-lg"
        }
      >
        {/* Logo or Brand Name */}
        <div className="text-custom-light-blue font-bold text-xl md:text-2xl">
          MyStore
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className={"md:hidden flex gap-5 items-center"}>
          <button onClick={toggleMenu} className="text-white">
            <Bars3Icon
              width={20}
              height={20}
              color={theme === "light" ? "black" : "white"}
            />
          </button>
          <button
            onClick={toggleTheme}
            className={"text-black dark:text-white"}
          >
            <SunIcon
              width={25}
              height={25}
              color={theme === "light" ? "#06bee1" : "#e2e8f0"}
            />
          </button>
        </div>

        {/* Nav Links for Desktop */}
        <div className="hidden lg:flex items-center justify-end gap-5">
          <NavLink
            to="/"
            className="relative font-semibold hover:text-custom-light-blue hover:duration-300 px-4 py-2 group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-custom-light-blue group-hover:w-full transition-all duration-300"></span>
          </NavLink>
          <NavLink
            to="/products"
            className="relative font-semibold  hover:text-custom-light-blue hover:duration-300 px-4 py-2 group"
          >
            Products
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-custom-light-blue group-hover:w-full transition-all duration-300"></span>
          </NavLink>
          <div
            onClick={toggleCart}
            className="relative font-semibold hover:text-custom-light-blue hover:duration-300 px-4 py-2 focus:outline-none group"
            style={{ cursor: "pointer" }}
          >
            Cart({totalQuantity})
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-custom-light-blue group-hover:w-full transition-all duration-300"></span>
          </div>
          <button
            onClick={toggleTheme}
            className={"text-black dark:text-white"}
          >
            <SunIcon
              width={25}
              height={25}
              color={theme === "light" ? "#06bee1" : "#e2e8f0"}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      <MobileMenuModal
        isMenuOpen={isMenuOpen}
        toggleCart={toggleCart}
        closeMenu={closeMenu}
        totalQuantity={totalQuantity}
      />

      {/* Cart Modal */}
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
    </>
  );
};

export default Navbar;
