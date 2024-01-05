"use client";
import { getProductInfoById } from "@/api/requests";
import { React, useState } from "react";
import useStore from "@/store/cart";

const AddCartButton = ({ item }) => {
  const { items, addItem } = useStore();
  const [isLoading, setIsLoading] = useState(false);
  const formatType = ["pdf", "word"];
  let isInCart = items.map((cartItem) => cartItem.id).includes(+item.id);

  const onClickAddItem = (options) => {
    setIsLoading(true);
    getProductInfoById(item.id)
      .then((data) => {
        setIsLoading(false);
        addItem({ ...options, ...data.product });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  // if (isLoading) return <span>Loading...</span>;

  return (
    <>
      {formatType.map((type, index) => (
        <div
          key={type}
          onClick={() =>
            onClickAddItem({
              checkOption: index,
            })
          }
          className={isInCart ? "remove-button" : `add-button ${type}`}
        >
          {isInCart ? "Удалить" : type}
        </div>
      ))}
      <div
        onClick={() => onClickAddItem(item)}
        className={isInCart ? "remove-wrapper active" : "remove-wrapper"}
      >
        Удалить
      </div>
    </>
  );
};

export default AddCartButton;
