"use client";
import { React, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cart from "@/assets/icons/cart.svg";
import cartEmpty from "@/assets/icons/cartEmpty.svg";
import useStore from "@/store/cart";
import CartItemsContainer from "./CartItemsContainer";

const Cart = () => {
  const { items } = useStore();
  const [open, setOpen] = useState(false);
  const cartRef = useRef();
  const totalPrice =
    items.map((item) => +item.price).reduce((a, b) => a + b, 0) || 0;

  useEffect(() => {
    useStore.persist.rehydrate();
    const handleOutsideClick = (e) => {
      if (open && !cartRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleOutsideClick);
    return () => document.body.removeEventListener("click", handleOutsideClick);
  }, [open]);

  return (
    <div ref={cartRef}>
      <div className="cart-image">
        <Image
          className="cart-button"
          onClick={() => setOpen(!open)}
          src={items.length > 0 ? cartEmpty : cart}
          alt="Корзина"
          width={40}
        />
        <div className="cart-count">
          {items.length > 0 ? items.length : false}
        </div>
      </div>

      {open && (
        <div className="cart-container">
          <div onClick={() => setOpen(!open)} className="cart-close">
            ✕
          </div>
          <>
            {items.length > 0 ? (
              <>
                <CartItemsContainer />
                <div className="cart-pay__container">
                  <div className="cart-pay__block">
                    <div className="cart-pay__count">
                      Итого : {totalPrice} RUB
                    </div>
                    <div className="cart-pay__info">
                      Без учета комиссий платежных систем
                    </div>
                  </div>
                  <Link className="button" href="/redirect">
                    К оплате
                  </Link>
                </div>
              </>
            ) : (
              <div className="cart-empty">Корзина пуста</div>
            )}
          </>
        </div>
      )}
    </div>
  );
};

export default Cart;
