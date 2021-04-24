import React from 'react'
import ReactDom from 'react-dom'
import Container from 'react-bootstrap/Container'

//to download the react-router-dom   type in cmd the  npm install react-router-dom
//to set up the router dom using BrowserRouter 
//to install SCSS type    npm install node-sass
//to fix the redux problem error npm install --save redux react-redux
//to install bootstrap   npm install react-bootstrap bootstrap
import { BrowserRouter } from 'react-router-dom'



import App from './App'

import './style/app.scss' //importing the scss
import './style/header.scss'
import './style/content.scss'
import 'font-awesome/css/font-awesome.min.css';  //npm install --save font-awesome

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,document.getElementById('root'))