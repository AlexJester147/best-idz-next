import DefaultLayout from "@/layout/defaultLayout";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Отзывы",
};

export default function Reviews() {
  return (
    <DefaultLayout>
      <Breadcrumbs data={[{ id: "", name: "Отзывы" }]} />
      <div>Reviews</div>
    </DefaultLayout>
  );
}
