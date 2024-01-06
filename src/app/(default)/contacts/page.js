import DefaultLayout from "@/layout/defaultLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";
import vk from "@/assets/icons/vk.svg";
import telegram from "@/assets/icons/telegram.svg";
import instagram from "@/assets/icons/instagram.svg";

export const metadata = {
  title: "Контакты",
};

export default function Contacts() {
  return (
    <DefaultLayout>
      <Breadcrumbs data={[{ id: "", name: "Контакты" }]} />
      <div className="contacts">
        <div className="contact-description">
          <p>Приветствуем Вас на сайте, посвященному сборнику ИДЗ Рябушко!</p>
          <p>
            Наша компания начала свою работу с 2018 года. За это время мы
            заработали высокую репутацию среди студентов и имеем множество
            положительных отзывов.
          </p>
          <p>
            Покупая у нас, вы получаете следующие преимущества: самые низкие
            цены в Интернете, высокое качество работ, удобные способы оплаты,
            моментальную доставку и оперативную помощь консультанта.
          </p>
          <p>
            В нашей базе есть все варианты ИДЗ, АЗ и контрольные работы из
            сборника А.П.Рябушко.
          </p>
        </div>

        <div className="contact-logo__block">
          <h2>Мы в соцсетях</h2>

          <div className="contact-logo_wrapper">
            <div className="contact-link">
              <Link href="https://vk.com/best_idz" target="_blank">
                <Image src={vk} width={40} height={40} alt="VK" />
              </Link>
            </div>

            <div className="contact-link">
              <Link href="https://t.me/best_idz_support" target="_blank">
                <Image src={telegram} width={40} height={40} alt="Telegram" />
              </Link>
            </div>

            <div className="contact-link">
              <Link href="https://www.instagram.com/best_idz/" target="_blank">
                <Image src={instagram} width={40} height={40} alt="Instagram" />
              </Link>
            </div>
          </div>
        </div>

        <div className="contacts-doc__wrapper">
          <div className="contact-link">
            <Link
              className="button"
              href="/books/polzovsogl.pdf"
              target="_blank"
            >
              Пользовательское соглашение
            </Link>
          </div>

          <div className="contact-link">
            <Link className="button" href="/books/oferta.pdf" target="_blank">
              Публичная оферта
            </Link>
          </div>

          <div className="contact-link">
            <Link
              className="button"
              href="/books/confidentiality.pdf"
              target="_blank"
            >
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
