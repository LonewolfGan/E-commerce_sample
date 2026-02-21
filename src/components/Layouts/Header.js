import Logo from "../../assets/logo.png";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { Search } from "../Sections/Search";
import { DropdownLoggedIn } from "../Elements/DropDownLoggedIn";
import { DropdownLoggedOut } from "../Elements/DropDownLoggedOut";
import { useCart } from "../../context/CartContext";

export const Header = () => {
  const [searchSection, setSearchSection] = useState(false);
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark")) || false,
  );
  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
    isDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDark]);

  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));
  const [dropdown, setDropDown] = useState(false);
  const { cartList } = useCart();
  return (
    <header>
      <nav className="bg-white dark:bg-gray-900 py-2">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between mx-auto items-center px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-10" alt="CodeBook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CodeBook
            </span>
          </Link>
          <div className="flex items-center relative">
            <span
              onClick={() => setIsDark(!isDark)}
              className={`cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi ${isDark ? "bi-sun" : "bi-moon"}`}
            ></span>
            <span
              onClick={() => setSearchSection(!searchSection)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"
            ></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  {cartList.length}
                </span>
              </span>
            </Link>
            <span
              onClick={() => setDropDown(!dropdown)}
              className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"
            ></span>
          </div>
        </div>
      </nav>
      {searchSection && <Search setSearchSection={setSearchSection} />}
      {dropdown &&
        (token ? (
          <DropdownLoggedIn cbid={cbid} setDropDown={setDropDown} />
        ) : (
          <DropdownLoggedOut setDropDown={setDropDown} />
        ))}
    </header>
  );
};
