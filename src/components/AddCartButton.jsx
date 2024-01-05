"use client";

const AddCartButton = ({ item }) => {
  const formatType = ["pdf", "word"];
  let isInCart = false;
  return (
    <>
      {formatType.map((type, index) => (
        <div
          key={type}
          className={isInCart ? "remove-button" : `add-button ${type}`}
        >
          {isInCart ? "Удалить" : type}
        </div>
      ))}
      <div className={isInCart ? "remove-wrapper active" : "remove-wrapper"}>
        Удалить
      </div>
    </>
  );
};

export default AddCartButton;
