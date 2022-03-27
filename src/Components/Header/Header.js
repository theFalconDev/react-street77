import React from 'react'
import Nav from '../Navbar/Nav'
const Header = () => {
  return (
  <>
  <header>
        <div className="container">
            <div className="row">
                <div className="col-12">
                 <Nav />
                </div>
            </div>
            <div className="row flex-column">
                <div className="col-9">
                    <h1>Большой гамбургер</h1>
                </div>
                <div className="col-2">
                    <span className="secund">говядина</span>
                </div>
                <div className="col-12">
                    <p>Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета,
                        сдобренная майонезом и кетчупом, - таков классический портрет гамбургера, наиболее
                        распространенной «быстрой» еды в США, от отравления которой ежедневно на больничных койках
                        оказываются десятки тысяч американцев</p>
                </div>
                <div className="col-4">
                    <span className="price">14 500</span>
                </div>
            </div>

        </div>
    </header>
  
  
  
  </>
  )
}

export default Header