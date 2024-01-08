import { getProductInfoById } from "@/api/requests";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";

export default async function Product({ params }) {
  const data = await getProductInfoById(params.productId);
  const imagePath = `/images/${params.categoryId}/${params.productId}.png`;

  return (
    <>
      <Breadcrumbs
        isProduct={true}
        id={params.categoryId}
        data={{ id: data.product.id, name: data.product.name }}
      />
      {
        <div className="product">
          <Image
            src={imagePath}
            width={300}
            height={300}
            alt={data.product.name}
          />
          <div>{data.product.name}</div>
          <div>{data.product.info}</div>
          <div>{JSON.stringify(data.product)}</div>
        </div>
      }
    </>
  );
}
