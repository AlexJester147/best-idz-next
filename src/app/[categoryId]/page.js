import { getCategoryDataById } from "@/api/requests";
import Breadcrumbs from "@/components/Breadcrumbs";
import CategoryBlock from "@/components/CategoryBlock";
import Link from "next/link";

export default async function Category({ params }) {
  const data = await getCategoryDataById(params.categoryId);

  return (
    <>
      <Breadcrumbs id={params.categoryId} />
      <div className="category-container">
        {data &&
          data.category.map((category) =>
            category.sub ? (
              <Link key={category.id} href={`${category.id}`}>
                <CategoryBlock>{category.name}</CategoryBlock>
              </Link>
            ) : (
              <Link key={category.id} href={`${category.id}/products/`}>
                <CategoryBlock>{category.name}</CategoryBlock>
              </Link>
            )
          )}
      </div>
    </>
  );
}
