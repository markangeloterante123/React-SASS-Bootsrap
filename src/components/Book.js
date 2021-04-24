import React from 'react'


const Books = props => {

	const {
        index,
        title
    } = props

	return (
		<div className="col-lg-3 col-md-4 col-sm-9">
			<tr key={index}>
				<td >
					<i className="fa fa-book"> {index + 1} </i>
				</td>
				<td >
					<a className="btn btn-flat btn-block btn-info"><i className="fa fa-eye"></i>{ props.title }</a>
				</td>
			</tr>	
		</div>
	)
}

export default Books
