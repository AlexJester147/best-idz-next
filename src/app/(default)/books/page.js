import DefaultLayout from "@/layout/defaultLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

export const metadata = {
  title: "Задачники",
};

export default function Books() {
  return (
    <DefaultLayout>
      <Breadcrumbs data={[{ id: "", name: "Задачники" }]} />
      <div className="books">
        <h2>Задачник ИДЗ Рябушко Часть 1</h2>
        <div className="book-description">
          <p>
            Определители. Матрицы. Системы линейных алгебраических уравнений
          </p>
          <p>Векторная алгебра</p>
          <p>Плоскости и прямые</p>
          <p>Линии и поверхности</p>
          <p>Функции. Пределы. Непрерывность функций</p>
          <p>
            Дифференциальное исчисление функций одной переменной и его
            приложения
          </p>
        </div>

        <div className="books_ancor">
          <Link className="button" href="/books/1.pdf" target="_blank">
            Скачать
          </Link>
        </div>

        <div className="book-block">
          <h2>Задачник ИДЗ Рябушко Часть 2</h2>
          <div className="book-description">
            <p> Определенный интеграл</p>
            <p>Дифференциальное исчисление функций многих переменных</p>
            <p>Обыкновенные дифференциальные уравнения</p>
          </div>
          <div className="books_ancor">
            <Link className="button" href="/books/2.pdf" target="_blank">
              Скачать
            </Link>
          </div>

          <div className="book-block">
            <h2>Задачник ИДЗ Рябушко Часть 3</h2>
            <div className="book-description">
              <div>Ряды</div>
              <div>Кратные интегралы </div>
              <div>Криволинейные интегралы</div>
              <div>Элементы терории поля</div>{" "}
            </div>
            <div className="books_ancor">
              <Link className="button" href="/books/3.pdf" target="_blank">
                Скачать
              </Link>
            </div>
          </div>

          <div className="book-block">
            <h2>Задачник ИДЗ Рябушко Часть 4</h2>
            <div className="book-description">
              <div>Операционное исчисление</div>
              <div>Теория устойчивости </div>
              <div>Теория вероятности </div>
              <div>Математическая статистика</div>
            </div>
            <div className="books_ancor">
              <Link className="button" href="/books/4.pdf" target="_blank">
                Скачать
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
