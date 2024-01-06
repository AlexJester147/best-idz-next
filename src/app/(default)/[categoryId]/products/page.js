import Link from "next/link";
import { getProductsByCategoryId } from "@/api/requests";
import Breadcrumbs from "@/components/Breadcrumbs";
import CategoryBlock from "@/components/CategoryBlock";
import AddCartButton from "@/components/cart/AddCartButton";

export default async function CategoryProducts({ params }) {
  const pathname = `/${params.categoryId}/products`;
  const data = await getProductsByCategoryId(params.categoryId);

  return (
    <>
      <Breadcrumbs id={params.categoryId} />
      <div className="category-container">
        {data &&
          data.product?.map((item) => (
            <div key={item.id} className="category">
              <Link href={`${pathname}/${item.id}`}>
                <CategoryBlock>{item.name}</CategoryBlock>
              </Link>
              <div className="price-container">
                <div className="new-price">{item.base_price} RUB</div>
              </div>
              <div className="cart-buttons-container">
                <Link href={`${pathname}/${item.id}`}>
                  <div className="buy-button">Купить</div>
                </Link>
                <div className="add-cart__container">
                  <AddCartButton item={item} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
