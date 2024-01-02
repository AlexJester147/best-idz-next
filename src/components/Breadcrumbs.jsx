import React from "react";
import Link from "next/link";
import { getProductsByCategoryId } from "@/api/requests";

const Breadcrumbs = async ({ data, id }) => {
  const reqData = await getProductsByCategoryId(id);
  const selectData = !id ? data : reqData?.breadCrumbs;
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
