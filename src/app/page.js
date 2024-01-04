import Link from "next/link";
import { getCategoryDataById } from "@/api/requests";
import CategoryBlock from "@/components/CategoryBlock";

export default async function Home() {
  const data = await getCategoryDataById(0);

  return (
    <div>
      <ul className="breadcrumbs" style={{ visibility: "hidden" }}>
        <li>Главная</li>
      </ul>
      <div className="category-container">
        {data.category.map((category) =>
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
    </div>
  );
}
