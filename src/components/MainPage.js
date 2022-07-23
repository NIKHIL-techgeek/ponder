import React from 'react'
// import {BrowserRouter as Router , Routes, Route,Link } from 'react-router-dom'
// import SecondPage from './components/SecondPage.js'
export default function App() {
  return (
     <div>
        <nav class="main-nav">
            
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
  <     Button>Three</Button>
        </ButtonGroup>              
            
        </nav>
        <section class="top-container">
        <header class="showcase">
            <h1>sample text</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed minus consequatur odit. Ipsum, quis.</p>
            <a href="#" class="btn">Sample text</a>
        </header>
        <div class="top-box top-box-a">
            <h4>membership</h4>
            <p class="price">100/mo</p>
            <a href="#" class="btn">buy now</a>
        </div>
    </section>
        <a href='/people'>
                <img alt="Qries" src="https://www.qries.com/images/banner_logo.png"
                width="150" height="70"/>
        </a>
        <a href='/people'>
                <img alt="Qries" src="https://www.qries.com/images/banner_logo.png"
                width="150" height="70"/>
        </a>
        <a href='/people'>
                <img alt="Qries" src="https://www.qries.com/images/banner_logo.png"
                width="150" height="70"/>
        </a>
        <a href='/people'>
                <img alt="Qries" src="https://www.qries.com/images/banner_logo.png"
                width="150" height="70"/>
             </a>
     </div>
  
  )
}
