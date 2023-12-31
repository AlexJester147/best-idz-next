import { getProductInfoById } from "@/api/requests";

export default async function Product({ params }) {
  const data = await getProductInfoById(params.productId);

  return (
    <>
      {data && (
        <div className="product">
          <div>{data.product.name}</div>
          <div>{data.product.info}</div>
          <div>{JSON.stringify(data.product)}</div>
        </div>
      )}
    </>
  );
}
