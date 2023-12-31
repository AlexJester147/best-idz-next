"use client";
import Link from "next/link";
import { getProductsByCategoryId } from "@/api/requests";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function CategoryProducts({ params }) {
  const [data, setData] = useState([]);
  const pathname = usePathname();

  getProductsByCategoryId(params.categoryId).then((data) => setData(data));

  return (
    <>
      <div className="category-container">
        {data &&
          data.product?.map((item) => (
            <div key={item.id} className="category">
              <Link href={`${pathname}/${item.id}`}>
                <div className="category-image">{item.name}</div>
                <div className="category-name">{item.name}</div>
              </Link>
              <div className="price-container">
                <div className="new-price">{item.base_price} RUB</div>
              </div>
              <div className="cart-buttons-container">
                <Link href={`${pathname}/${item.id}`}>
                  <div className="buy-button">Купить</div>
                </Link>
                <div className="cart-button__container"></div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
