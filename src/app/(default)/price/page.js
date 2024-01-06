import DefaultLayout from "@/layout/defaultLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getRubCurrency, getKztCurrency } from "@/api/requests";
import { priceObject } from "@/utils/priceStore";

export const metadata = {
  title: "Цены",
};

export default async function Price() {
  const rubCurrency = await getRubCurrency();
  const kztCurrency = await getKztCurrency();

  return (
    <DefaultLayout>
      <Breadcrumbs data={[{ id: "", name: "Цены" }]} />
      <div className="price">
        {priceObject.map((elem) => {
          return (
            <div key={elem.name + " block"} className="price-block">
              <h2 key={elem.name}>{elem.name}</h2>
              <div
                style={{ color: "#09ab3f" }}
                className={
                  elem.name == "Контрольные работы"
                    ? "price-block__row-control"
                    : "price-block__row"
                }
              >
                <div>{elem.name == "Контрольные работы" ? "Тема" : "№"}</div>
                <div>RUB</div>
                <div>BYN</div>
                <div>KZT</div>
              </div>
              {Object.entries(elem.data).map((data) => (
                <div
                  className={
                    elem.name == "Контрольные работы"
                      ? "price-block__row-control"
                      : "price-block__row"
                  }
                  key={data[0]}
                >
                  <div>{data[0]}</div>
                  <div>{data[1]}</div>
                  <div>
                    {((data[1] * rubCurrency.Cur_OfficialRate) / 100).toFixed(
                      1
                    )}
                  </div>
                  <div>
                    {Math.floor(data[1] * kztCurrency.Cur_OfficialRate)}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </DefaultLayout>
  );
}
