import React from "react";
import Link from "next/link";
import { getProductsByCategoryId } from "@/api/requests";

const Breadcrumbs = async ({ isProduct, data, id }) => {
  const reqData = await getProductsByCategoryId(id);
  isProduct
    ? (reqData.breadCrumbs[reqData.breadCrumbs.length - 1].id += "/products")
    : reqData.breadCrumbs;

  const selectData =
    id && data
      ? [...reqData.breadCrumbs, data]
      : data
      ? data
      : reqData.breadCrumbs;

  return (
    selectData && (
      <ul className="breadcrumbs">
        <li key="Главная">
          <Link href="/">Главная</Link>
        </li>
        {selectData.map((item, index) => {
          if (index < selectData.length - 1) {
            return (
              <li key={item.id}>
                <Link href={`/${item.id}`}>{item.name}</Link>
              </li>
            );
          } else {
            return <li key={item.id}>{item.name}</li>;
          }
        })}
      </ul>
    )
  );
};

export default Breadcrumbs;
