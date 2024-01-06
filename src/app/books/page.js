import DefaultLayout from "@/layout/defaultLayout";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Задачники",
};

export default function Books() {
  return (
    <DefaultLayout>
      <Breadcrumbs data={[{ id: "", name: "Задачники" }]} />
      <div>Books</div>
    </DefaultLayout>
  );
}
