import React from 'react'

export default function MainPage() {
  return (
    <div>
        <img alt="banner_logo" src="#"/>
        <div className="warpper">
        {/* <!-- navigation --> */}
        <nav className="main-nav">
            <ul>
                <li><a href="#">hackathon</a></li>
                <li><a href="#">hackathon</a></li>                
                <li><a href="#">hackathon</a></li>                
                <li><a href="#">hackathon</a></li>
            </ul>
        </nav>

        {/* <!-- top container --> */}
    <section className="top-container">
        <header className="showcase">
            <h1>sample text</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed minus consequatur odit. Ipsum, quis.</p>
            <a href="#" className="btn">Sample text</a>
        </header>
        <div className="top-box top-box-a">
            <h4>membership</h4>
            <p className="price">100/mo</p>
            <a href="#" className="btn">buy now</a>
        </div>
    </section>

    {/* <!-- boxes --> */}
    <section className="box">
        <div className="box">
            <a href="page2.html">
                <img alt="Qries" src="https://www.qries.com/images/banner_logo.png"
                width="150" height="70"/>
             </a>
             <a href="page2.html">
                <img alt="Qries" src="https://www.qries.com/images/banner_logo.png"
                width="150" height="70"/>
             </a>
             <a href="page2.html">
                <img alt="Qries" src="https://www.qries.com/images/banner_logo.png"
                width="150" height="70"/>
             </a>
             <a href="page2.html">
                <img alt="Qries" src="https://www.qries.com/images/banner_logo.png"
                width="150" height="70"/>
             </a>
       
        </div>
    </section>


    </div>
    </div>
    
  )
}
