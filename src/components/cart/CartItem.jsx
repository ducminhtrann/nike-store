import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import {
  setDecreaseItemQTY,
  setIncreaseItemQTY,
  setRemoveItemFromCart,
} from "../../assets/app/CartSlice";

const CartItem = ({
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) => {
  const dispatch = useDispatch();

  const onRemoveItem = () => {
    dispatch(
      setRemoveItemFromCart({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };
  const onIncreaseItem = () => {
    dispatch(
      setIncreaseItemQTY({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };
  const onDecreaseItem = () => {
    dispatch(
      setDecreaseItemQTY({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };
  return (
    <>
      <div className="flex items-center justify-between w-full px-5">
        <div className="flex items-center gap-5">
          <div
            className={`bg-gradient-to-b ${color} ${shadow} relative rounded
            p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}
          >
            <img
              src={img}
              alt={`img/cart-item/${id}`}
              className="w-36 h-auto object-fill lg:w-28"
            />
          </div>
          <div className={`grid items-center gap-4`}>
            <div className="grid items-center leading-none">
              <h1 className="font-medium text-lg text-slate-900 sm:text-sm">
                {title}
              </h1>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </div>
            <div className="flex items-center justify-around w-full">
              <button
                type="button"
                className="w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center
                active:scale-90 bg-theme-cart rounded text-white stroke-[2]"
                onClick={onDecreaseItem}
              >
                <MinusIcon />
              </button>
              <div
                className="bg-theme-cart rounded font-medium lg:text-xs w-7 lg:w-6 h-6 lg:h-5 text-white stroke-[2]
                flex items-center justify-center"
              >
                {cartQuantity}
              </div>
              <button
                type="button"
                className="w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center
                active:scale-90 bg-theme-cart rounded text-white stroke-[2]"
                onClick={onIncreaseItem}
              >
                <PlusIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-5">
          <div className="grid items-center justify-items-center">
            <h1 className="text-lg lg:text-base text-slate-900 font-medium">
              ${price * cartQuantity}
            </h1>
          </div>
          <div className="grid items-center justify-items-center">
            <button type="button" className="" onClick={onRemoveItem}>
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
