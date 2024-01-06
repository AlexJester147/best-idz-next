import { getProductInfoById } from "@/api/requests";
import Breadcrumbs from "@/components/Breadcrumbs";

export default async function Product({ params }) {
  const data = await getProductInfoById(params.productId);

  return (
    <>
      <Breadcrumbs
        isProduct={true}
        id={params.categoryId}
        data={{ id: data.product.id, name: data.product.name }}
      />
      {
        <div className="product">
          <div>{data.product.name}</div>
          <div>{data.product.info}</div>
          <div>{JSON.stringify(data.product)}</div>
        </div>
      }
    </>
  );
}
