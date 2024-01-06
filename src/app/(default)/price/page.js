import DefaultLayout from "@/layout/defaultLayout";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Цены",
};

export default function Price() {
  return (
    <DefaultLayout>
      <Breadcrumbs data={[{ id: "", name: "Цены" }]} />
      <div>Price</div>
    </DefaultLayout>
  );
}
