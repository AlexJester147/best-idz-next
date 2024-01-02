"use server";
import { storeKey, apiCatalog, apiProducts, apiProductInfo } from "./APIConfig";

export async function getCategoryDataById(id) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(
    `${apiCatalog}seller_id=${storeKey}&category_id=${id}`,
    options
  );
  return response.json();
}

export async function getProductsByCategoryId(id) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(
    `${apiProducts}seller_id=${storeKey}&category_id=${id}&rows=30`,
    options
  );
  return response.json();
}

export async function getProductInfoById(id) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${apiProductInfo}/${id}/data`, options);
  return response.json();
}
