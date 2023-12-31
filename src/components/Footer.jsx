import React from "react";
import mastercard from "../assets/icons/mc-anim.svg";
import visa from "../assets/icons/visa-anim.svg";
import mir from "../assets/icons/mir-anim.svg";
import sber from "../assets/icons/sber-cart.svg";
import tinkoff from "../assets/icons/tinkoff.svg";
import yandex from "../assets/icons/yandex.svg";
import qiwi from "../assets/icons/qiwi-cart.svg";
import webmoney from "../assets/icons/wm.svg";
import steam from "../assets/icons/steam-old.svg";
import binance from "../assets/icons/binance.svg";
import coinbase from "../assets/icons/coinbase.svg";
import usdt from "../assets/icons/usdt-old.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div style={{ textAlign: "center" }}>Мы принимаем к оплате</div>
      <div className="footer-image__container">
        <Image src={mastercard} width={66} height={40} alt="Mastercard" />
        <Image src={visa} width={129} height={40} alt="Visa" />
        <Image src={mir} width={57} height={40} alt="Mir" />
        <Image src={sber} width={39} height={40} alt="Sber" />
        <Image src={tinkoff} width={39} height={40} alt="Tinkoff" />
        <Image src={yandex} width={56} height={40} alt="ЮMoney/Яндекс" />
        <Image src={qiwi} width={39} height={40} alt="Qiwi" />
        <Image src={webmoney} width={40} height={40} alt="WebMoney" />
        <Image src={steam} width={40} height={40} alt="Steam" />
        <Image src={binance} width={40} height={40} alt="Binance" />
        <Image src={coinbase} width={40} height={40} alt="Coinbase" />
        <Image src={usdt} width={40} height={40} alt="Usdt" />
      </div>
    </footer>
  );
};

export default Footer;
