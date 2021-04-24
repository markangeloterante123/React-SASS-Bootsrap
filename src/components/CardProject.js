import React, { useState } from 'react'


const CardProject = () => {	
	const [title, setTitle] = useState("LMS-with K 11 to 12 Grading System")//the default value
	const [info, setInfo] = useState("LMS-with K 11 to 12 Grading System is a Learning Management system intended for the student and intructors and students of Philtech-GMA")
	
	const handleOnClick = (type) => {
		if(type === 'LMS'){
			setTitle("LMS-with K 11 to 12 Grading System")
			setInfo("LMS-with K 11 to 12 Grading System is a Learning Management system intended for the student and intructors and students of Philtech-GMA")
		}
		else if(type === 'MTR'){
			setTitle("Denver MotorShop Inventory System")
			setInfo("The Denver Motorshop Inventory System is written using PHP Codeigniter-framework, and Bootstrap")
		}
		else if(type === 'BIS'){
			setTitle("Beau Station Inventory System")
			setInfo("Beau StationInventory System is written using PHP Codeigniter-framework, and Bootstrap")	
		}
		else if(type === 'CV'){
			setTitle("Mark Angelo Terante CV")
			setInfo("The Online CV are written using ReactJs")
		}
	}

	return(
		<>
		  	<div className="col-md-3 col-sm-3 menu">
				<ul>
				    <li><button className="button-hide" onClick={()=> handleOnClick('LMS')}><i className="fa fa-arrow-right"></i> LMS-k12 Grading System</button></li>
				    <li><button className="button-hide" onClick={()=> handleOnClick('MTR')}><i className="fa fa-arrow-right"></i> Motorshop-Inventory</button></li>
				    <li><button className="button-hide" onClick={()=> handleOnClick('BIS')}><i className="fa fa-arrow-right"></i> Beauty-Inventory System</button></li>
				    <li><button className="button-hide" onClick={()=> handleOnClick('CV')}><i className="fa fa-arrow-right"></i> My Profile-Project</button></li>
				</ul>
		 	</div> 
		 	<div className="col-lg-9 col-sm-9">
				<h1> { title }</h1>
				<p> {info} </p>	    	
			</div>			
		</>
	)
}

export default CardProject