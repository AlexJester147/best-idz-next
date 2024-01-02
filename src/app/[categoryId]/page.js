import Link from "next/link";
import { getCategoryDataById } from "@/api/requests";
import { setCategoryName } from "@/utils/functions";

export default async function Category({ params }) {
  const data = await getCategoryDataById(params.categoryId);

  return (
    <>
      <div className="category-container">
        {data &&
          data.category.map((category) =>
            category.sub ? (
              <Link key={category.id} href={`${category.id}`}>
                <div className="category-block">
                  <div className="category-image">
                    {setCategoryName(category.name)}
                  </div>
                  <div className="category-name">{category.name}</div>
                </div>
              </Link>
            ) : (
              <Link key={category.id} href={`${category.id}/products/`}>
                <div className="category-block">
                  <div className="category-image">
                    {setCategoryName(category.name)}
                  </div>
                  <div className="category-name">{category.name}</div>
                </div>
              </Link>
            )
          )}
      </div>
    </>
  );
}
