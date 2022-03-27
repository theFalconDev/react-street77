import React from 'react'
// import "./Menu.css";
const menu = () => {
  return (
    <>
        <main>
        <div className="menu">
            <div className="container">
                <div className="row">
                    <div className="col-auto">
                        <div className="list-group" id="list-tab" role="tablist">
                          <a className="list-group-item list-group-item-action1 active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Гамбургеры </a>
                          <a className="list-group-item list-group-item-action1" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Хот доги</a>
                          <a className="list-group-item list-group-item-action1" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Пицца</a>
                          <a className="list-group-item list-group-item-action1" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Напитки </a>



                          <a className="list-group-item list-group-item-action1" id="sok" data-bs-toggle="list" href="#sok1" role="tab" aria-controls="sok1">Соки </a>

                        </div>
                      </div>
                </div>
            </div>
        </div>
        </main>
    </>
  );
};
export default menu