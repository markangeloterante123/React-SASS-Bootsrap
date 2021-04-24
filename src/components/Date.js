import React from 'react'

function formatDate (date) {
	return date.toLocaleDateString()//para sa date
}

function Date (props) {
	
	return (
		<div>
			<p><i className="fa fa-calendar"></i> Release : {formatDate(props.date)}</p>
		</div>
	)
}

export default Date
