"use client";
import { React, useEffect } from "react";
import { getIdPo } from "@/api/requests";
import useStore from "@/store/cart";
import { addToCartApi } from "@/api/APIConfig";

function Redirect() {
  const { items } = useStore();

  async function goToPayment(items, idPoArray) {
    const data = "product_id=" + items[0].id + "&id_po=" + idPoArray[0];
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    };
    fetch(addToCartApi, options).then((data) =>
      data.json().then((res) => getAllcart(res.cart_uid))
    );

    const newItems = items.length > 1 ? items.slice(1) : items;

    async function getAllcart(cartUID) {
      const cartPromises = newItems.map((item, index) => {
        const data =
          "product_id=" +
          item.id +
          "&id_po=" +
          idPoArray[index + 1] +
          "&cart_uid=" +
          cartUID;
        const options = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: data,
        };

        return new Promise(async (resolve) => {
          setTimeout(async () => {
            const result = await fetch(addToCartApi, options).then((data) =>
              data.json()
            );
            resolve(result);
          }, index * 100);
        });
      });

      Promise.allSettled(cartPromises)
        .then((results) => {
          const resultCartUID = results.map((res) => res.value.cart_uid)[
            results.length - 1
          ];
          submitForm(resultCartUID);
        })
        .catch((error) => {
          console.error(error);
        });

      const submitForm = (cartUid) => {
        // Создаем форму
        const form = document.createElement("form");
        form.method = "post";
        form.action = "https://oplata.info/asp2/pay.asp";

        // Создаем и добавляем скрытое поле для cart_uid
        const cartUidInput = document.createElement("input");
        cartUidInput.type = "hidden";
        cartUidInput.name = "cart_uid";
        cartUidInput.value = cartUid;
        form.appendChild(cartUidInput);

        // Создаем и добавляем скрытое поле для _ow
        const owInput = document.createElement("input");
        owInput.type = "hidden";
        owInput.name = "_ow";
        owInput.value = "0";
        form.appendChild(owInput);

        const failPageInput = document.createElement("input");
        failPageInput.type = "hidden";
        failPageInput.name = "failpage";
        failPageInput.value = "http://localhost:3000/";
        form.appendChild(failPageInput);

        // Добавляем форму в тело документа и сразу отправляем ее
        document.body.appendChild(form);
        form.submit();
      };
    }
  }

  useEffect(() => {
    const productPromises = items.map((item, index) => {
      return new Promise(async (resolve) => {
        setTimeout(async () => {
          const result = await getIdPo(item).then((res) => res.id_po);
          resolve(result);
        }, index * 100);
      });
    });

    Promise.allSettled(productPromises)
      .then((results) => {
        const idPoArray = results.map((result) => result.value);
        goToPayment(items, idPoArray);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="redirect">
      <span className="loader"></span>
    </div>
  );
}

export default Redirect;
