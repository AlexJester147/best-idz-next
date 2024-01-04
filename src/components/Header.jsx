import React from "react";
import Link from "next/link";
import Cart from "./Cart";

const Header = () => {
  return (
    <header className="header">
      <Cart />
      <nav>
        <ul>
          <li>
            <Link href="/">Главная</Link>
          </li>
          <li>
            <Link href="/price">Цены</Link>
          </li>
          <li>
            <Link href="/reviews">Отзывы</Link>
          </li>
          <li>
            <Link href="/books">Задачники</Link>
          </li>
          <li>
            <Link href="/contacts">Контакты</Link>
          </li>
          <li>
            <Link href="https://oplata.info/info/" target="_blank">
              Покупки
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
