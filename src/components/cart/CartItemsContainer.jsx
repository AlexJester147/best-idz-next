import useStore from "@/store/cart";

const CartItemsContainer = () => {
  const { items, removeItem } = useStore();

  return (
    <div className="cart-block">
      <div className="cart-items__container">
        {items.map((item) => (
          <div key={item.id} className="cart-item__row">
            <div className="cart-item__name">
              {item.name} ({item.checkOptionText})
            </div>
            <div className="cart-item__price">{item.price} RUB</div>
            <div
              onClick={(e) => {
                removeItem(item);
                e.stopPropagation();
              }}
              className="cart-item__delete"
            >
              ✕
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItemsContainer;
