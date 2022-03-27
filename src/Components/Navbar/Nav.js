import React from "react";
// import "./nav.css";
const Nav = () => {
  return (
    <>
      <nav>
        <a href="#!" className="logo">
          Street88
        </a>
        <ul>
          <li>
            <a className="active" href="#!">
              Корзина <span>2</span>
            </a>
          </li>
          <li>
            <a href="#!">Меню</a>
          </li>
          <li>
            <a href="#!">О нас</a>
          </li>
          <li>
            <a href="#!">Контакты</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
