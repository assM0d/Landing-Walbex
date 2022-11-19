import telegram from "../../images/telegram.svg";
import viber from "../../images/viber.svg";
import whatsapp from "../../images/whatsapp.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__block">
        <h4 className="footer__title">О компании</h4>
        <ul className="footer__list">
          <li className="footer__text">Партнёрская программа</li>
          <li className="footer__text">Вакансии</li>
        </ul>
      </div>

      <div className="footer__block">
        <h4 className="footer__title">Меню</h4>
        <div className="footer__lists">
          <ul className="footer__list footer__list_menu">
            <li className="footer__text">Расчёт стоимости</li>
            <li className="footer__text">Услуги</li>
            <li className="footer__text">Виджеты</li>
            <li className="footer__text">Интеграции</li>
            <li className="footer__text">Наши клиенты</li>
          </ul>

          <ul className="footer__list">
            <li className="footer__text">Кейсы</li>
            <li className="footer__text">Благодарственные письма</li>
            <li className="footer__text">Сертификаты</li>
            <li className="footer__text">Блог на Youtube</li>
            <li className="footer__text">Вопрос / Ответ</li>
          </ul>
        </div>
      </div>

      <div className="footer__block footer__block_contacts">
        <h4 className="footer__title">Контакты</h4>
        <p className="footer__text footer__text_number">+7 555 555-55-55</p>
        <ul className="footer__contacts-list">
          <li className="footer__contacts-item">
            <img src={telegram} alt="telegram, телеграм" />
          </li>
          <li className="footer__contacts-item">
            <img src={viber} alt="viber, вайбер" />
          </li>
          <li className="footer__contacts-item">
            <img src={whatsapp} alt="whatsapp, ватсап." />
          </li>
        </ul>
        <p className="footer__text footer__text_address">
          Москва, Путевой проезд 3с1, к 902
        </p>

        <div className="footer__rights-container">
          <p className="footer__rights">
            {"©"}WELBEX 2022. ВСЕ права защищены.
          </p>
          <a
            className="footer__rights footer__rights_underline"
            href="!#"
            target="_blank"
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
