import { FC } from "react";
import { NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { MenuProps } from "../../types/Menu";

const MobileMenuModal: FC<MenuProps> = ({
  isMenuOpen,
  toggleCart,
  closeMenu,
  totalQuantity,
}) => (
  <div className="lg:hidden">
    {isMenuOpen && (
      <div
        className="fixed inset-0 bg-gray-900 bg-opacity-50 z-10 duration-300"
        onClick={closeMenu}
      ></div>
    )}
    <div
      className={`fixed inset-0 z-20 transform ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-500 ease-in-out flex justify-end`}
    >
      {/* Mobile Menu Content */}
      <div className="relative z-30 bg-gray-200 dark:bg-gray-900 text-white shadow-lg w-[90%] h-full pt-14 pl-5 max-w-[60%]">
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 dark:text-white text-gray-950"
        >
          <XMarkIcon width={20} height={20} />
        </button>
        <NavLink
          to="/"
          onClick={closeMenu}
          className="block text-sm text-gray-950 dark:text-white hover:text-custom-light-blue hover:duration-300 mb-4"
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          onClick={closeMenu}
          className="block text-sm text-gray-950 dark:text-white hover:text-custom-light-blue hover:duration-300 mb-4"
        >
          Products
        </NavLink>
        <button
          onClick={() => {
            toggleCart();
            closeMenu();
          }}
          className="text-sm text-gray-950 dark:text-white hover:text-custom-light-blue hover:duration-300"
        >
          Cart({totalQuantity})
        </button>
        <div className="absolute -right-14 -bottom-14 h-[200px] w-[200px] bg-custom-light-blue rounded-full blur-3xl opacity-40 dark:opacity-20"></div>
      </div>
    </div>
  </div>
);

export default MobileMenuModal;
