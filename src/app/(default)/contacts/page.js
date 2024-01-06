import DefaultLayout from "@/layout/defaultLayout";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Контакты",
};

export default function Contacts() {
  return (
    <DefaultLayout>
      <Breadcrumbs data={[{ id: "", name: "Контакты" }]} />
      <div>Contacts</div>
    </DefaultLayout>
  );
}
