import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQuantity, setOpenCart } from "../assets/app/CartSlice";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const dispatch = useDispatch();
  const totalQty = useSelector(selectTotalQuantity);

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const onNavScroll = () => {
    if (window.scrollY > 10) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      removeEventListener("scroll", onNavScroll);
    };
  }, []);
  return (
    <>
      <header
        className={
          !navState
            ? "absolute top-7 left-0 right-0 opacity-100 z-50"
            : `fixed top-0 left-0 right-0 h-[9vh] flex items-center 
            justify-center opacity-100 z-[200] blur-effect-theme`
        }
      >
        <nav className="flex items-center justify-between nike-container">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo/img"
              className={`${navState && "filter brightness-0"} w-16 h-auto`}
            />
          </div>
          <ul className="flex items-center justify-center gap-2">
            <li className="grid items-center">
              <MagnifyingGlassIcon
                className={`${
                  navState && "text-slate-900 transition-all duration-300"
                } icon-style`}
              />
            </li>
            <li className="grid items-center">
              <HeartIcon
                className={`${
                  navState && "text-slate-900 transition-all duration-300"
                } icon-style`}
              />
            </li>
            <li className="grid items-center">
              <button
                type="button"
                className="border-none outline-none active:scale-110
                transition-all duration-300 relative"
                onClick={onCartToggle}
              >
                <ShoppingBagIcon
                  className={`${
                    navState && "text-slate-900 transition-all duration-300"
                  } icon-style`}
                />
                <div
                  className={`absolute top-4 right-0 ${
                    navState
                      ? "bg-slate-900 text-slate-100 shadow shadow-slate-900"
                      : "bg-white text-slate-900 shadow shadow-slate-100"
                  }  w-4 h-4 text-[0.65rem] leading-tight
                font-medium rounded-full flex items-center justify-center cursor-pointer
                hover:scale-110 transition-all duration-300`}
                >
                  {totalQty}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
