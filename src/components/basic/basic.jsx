import "./basic.css";
import "./Consult.css";

import { useWindowSize } from "../../window/useWindowSize";

import line from "../../images/line.svg";

export default function Basic() {
  const width = useWindowSize();
  const maxSize = 500;
  return (
    <>
      {width > maxSize ? (
        <section className="basic">
          <div className="basic__welbex-container">
            <h1 className="basic__more">
              Зарабатывайте больше
              <br />
              <span className="basic__more_welbex">с WELBEX</span>
            </h1>
            <p className="basic__welbex-description">
              Развиваем и контролируем продажи за вас
            </p>
          </div>

          <div className="consult">
            <h3 className="consult__title">
              Вместе с <span className="consult__title_span">БЕСПЛАТНОЙ</span>{" "}
              <span className="consult__title_span1"> КОНСУЛЬТАЦИЕЙ</span> мы
              дарим:
            </h3>

            <ul className="consult__list">
              <li className="consult__item">
                <h4 className="consult__item-title">Виджеты</h4>
                <p className="consult__item-paragraph">30 готовых решений</p>
              </li>
              <li className="consult__item">
                <h4 className="consult__item-title">Dashboard</h4>
                <p className="consult__item-paragraph">
                  с показателями вашего бизнеса
                </p>
              </li>
              <li className="consult__item">
                <h4 className="consult__item-title">Skype Аудит</h4>
                <p className="consult__item-paragraph">
                  отдела продаж и CRM системы
                </p>
              </li>
              <li className="consult__item">
                <h4 className="consult__item-title">35 дней</h4>
                <p className="consult__item-paragraph">использования CRM</p>
              </li>
            </ul>

            <button className="consult__btn">Получить консультацию</button>
          </div>
        </section>
      ) : (
        <section className="basic">
          <div className="basic__welbex-container">
            <h1 className="basic__more">
              Зарабатывайте больше
              <br />
              <span className="basic__more_welbex">с WELBEX</span>
            </h1>
            <p className="basic__welbex-description">
              Развиваем и контролируем продажи за вас
            </p>
          </div>

          <div className="consult">
            <h3 className="consult__title">
              Вместе с{" "}
              <span className="consult__title_span">
                бесплатной консультацией
              </span>{" "}
              мы дарим:
            </h3>

            <ul className="consult__list">
              <li className="consult__item">
                <img className="consult__line" src={line} alt="линия" />
                <h4 className="consult__item-title">Skype аудит</h4>
              </li>
              <li className="consult__item">
                <img className="consult__line" src={line} alt="линия" />
                <h4 className="consult__item-title">30 виджетов</h4>
              </li>
              <li className="consult__item">
                <img className="consult__line" src={line} alt="линия" />
                <h4 className="consult__item-title">Dashboard</h4>
              </li>
              <li className="consult__item">
                <img className="consult__line" src={line} alt="линия" />
                <h4 className="consult__item-title">Месяц amoCRM</h4>
              </li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
