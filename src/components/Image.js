import React from 'react'


function Image (props) {

	return (
		<div clasName="container">
			<img
				className="default-logo"
				src={props.image.logoPic}
				alt={props.image.name}
			/>
		</div>
	)

}

export default Image