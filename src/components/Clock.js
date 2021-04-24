import React from 'react'

const months = ["JANUARY", "FEBRUARY", "MARCH","APRIL", "MAY", "JUNE", "JULY", "AUGUSTT", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]

class Clock extends React.Component {


	constructor (props){
		super(props)
		this.state = {date: new Date()}
		this.formatDate = this.state.date.getDate() + " - " + months[this.state.date.getMonth()]+"-"+this.state.date.getFullYear()   
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		)
	}

	componentWillUnmount() {
		clearInterval(this.timerID)
	}

	tick() {
		this.setState({
			date: new Date()
		})
	}

	render() {
		return (
			<>
				<p> <i className="fa fa-calendar"></i>: {this.formatDate} <i className="fa fa-clock-o"></i> {this.state.date.toLocaleTimeString()} </p>
			</>
		)
	}	
}


export default Clock