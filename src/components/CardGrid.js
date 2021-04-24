import React from 'react'
import DateDisplay from './Date'



const CardGrid = ({title, sub, body, price, name}) => {

	const dateDisplay = {
		date : new Date()
	}

	return(
		<div className="col-12 col-md-6 col-lg-4 bg-default ">
		    <div className="card mb-100 wow fadeInUp" data-wow-delay="750ms">
		        <div className="card-content">
		            <h4 className="text-pull-center">{ title }</h4>
		            <div className="meta d-flex align-items-center">
		                <p>Author: { name }
		                    <span> <i className="fa fa-user text-success" aria-hidden="true"></i></span>
		                <span className="spanName " href="#">Date: { sub }</span>
		                </p>

		            </div>
		                <p>Abstract { body } </p>
		                <DateDisplay date={dateDisplay.date} />
		            </div>
		            <div className="card-content seat-rating-fee d-flex justify-content-between">
		                <div className="seat-rating h-100 d-flex align-items-center">
		                    <div className="seat">
		                    <i className="fa fa-book" aria-hidden="true"></i>Stock: 10
		                </div>
		                <div className="card-content ">
		                    <i className="fa fa-money" aria-hidden="true"></i>Price: {price}
		                </div>
		               
		            </div>
		         
		        </div>
		    </div>
		</div>
	)
}

export default CardGrid
