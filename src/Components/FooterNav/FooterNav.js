import React from "react";

const FooterNav = () => {
  return (
    <>
      <footer>
        <div className="footer_nav">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <nav className="d-flex justify-content-center">
                  <ul>
                    <li>
                      <a href="#!">Меню</a>
                    </li>
                    <li>
                      <a href="#!">О нас</a>
                    </li>
                    <li>
                      <a href="#!">Контакты</a>
                    </li>
                    <li>
                      <a href="#!">Instagram</a>
                    </li>
                    <li>
                      <a href="#!">Facebook</a>
                    </li>
                    <li>
                      <a href="#!">Telegram Bot</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <p>Сайт разработан в целях обучения © CHANGE 2021</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterNav;
