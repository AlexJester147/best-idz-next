"use server";
import {
  storeKey,
  apiCatalog,
  apiProducts,
  apiProductInfo,
  apiOptions,
} from "./APIConfig";

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

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

export async function getIdPo(item) {
  const data = {
    product_id: item.id,
    options: [
      {
        id: item.optionId,
        value: { id: item.variantId },
      },
    ],
    unit_cnt: 0,
    lang: "ru",
    ip: 1,
  };

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(apiOptions, options);
  return response.json();
}

export async function getRubCurrency() {
  const response = await fetch(
    `https://www.nbrb.by/api/exrates/rates/456?periodicity=0&ondate=${year}-${month}-${day}`
  );

  return response.json();
}

export async function getKztCurrency() {
  const response = await fetch(
    `https://www.nbrb.by/api/exrates/rates/459?periodicity=0&ondate=${year}-${month}-${day}`
  );

  return response.json();
}
