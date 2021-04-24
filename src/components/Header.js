import React from 'react'
import { useHistory } from 'react-router-dom'
import Image from './Image'
import Clock from './Clock'
 // <div className="app-main row row-cols-1 row-cols-md-3 row-cols-lg-4 bg-danger">
 //            <h1 className="danger">Hi Mark  Angelo Terante ay pogi tlga</h1>
 //        </div>

const Header = () => {
	const imageLogo = {
		image :{
			name: 'React Logo',
			logoPic: 'https://www.pinclipart.com/picdir/middle/385-3857336_react-logo-png-name-form-validation-clipart.png'
		}
	}
    return (

        <div className="home-header col-lg-12 col-md-12 col-sm-12"> 
        	<div className="container">
			    <div className="row align-items-center">
			        <div className="col-lg-2 col-md-4 col-sm-12"><Image image={imageLogo.image} /></div>
			       	<div className="header-title col-lg-10 col-md-8 col-sm-9" >
			       		<h1> First React-Project <span className="Title-Subtitle"><Clock /></span></h1>
			       	</div>	 
			    </div>
			</div>
        </div>
    )
}

export default Header