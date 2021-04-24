import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Grid from './CardGrid'
import Project from  './CardProject'
import Header from './Header' 
import Book from './Book'


const Content = () => {

		
		const [state, setState] = useState({
            todo: '',
            title:['PHP','JQUERY','CODEIGNITER'] //form of array
        })

		const { todo, title } = state 

	    return (
        <> 	
        	<div className="container">
        		<div className="row">
        			<Header />
        		</div>
        	</div>
        	<div className="page-section">
			    <div className="container">
			        <div className="row">
			            <div className className="col-12">
			                <div className="section-heading">
			                    <h3>React Bootstrap, Grid, Fontawesome, Date and Time,  useState, Images, & SCSS</h3>
			                </div>
			            </div>
			        </div>
			    
			    <div className="container">    
			        <div className="row "> 
	        			<Grid title="Grid1" name="Mark Angelo Terante" sub="Testgrid1" body="ipsum dolor sit amet, colit, se" price={150} />
						<Grid title="Grid2" name="Maggielyn Montero Terante" sub="Testgrid2" body="ipsum dolor sit amet, colit, sed do et" price={250} />
						<Grid title="Grid3" name="Test" sub="Testgrid3" body="ipsum dolor sit" price={350} />
						<Grid title="Grid4" name="Test" sub="Testgrid4" body="ipsum dolor sit" price={450} />
						<Grid title="Grid5" name="Test" sub="Testgrid5" body="ipsum dolor sit" price={550} />
			        </div>
			        <div className="row">
			        	<button className="btn btn-flat btn-success"><i className="fa fa-plus"></i> Add Book</button>
			        
			        		<table border="1">
			        			<thead>
			        				<th>#</th>
			        				<th>Title</th>
			        				<th>Action</th>
			        			</thead>
			        			<tbody>
				        			
				        			{
				        				title.length ? //first check the length
					                        title.map((value, index) => (
					             	
					                           <Book key={index} index={index} title={value} />
					                        
					                        )) : // else if false 
					                        <span><i className="fa fa-book"></i>No Books</span> 
						        	} 	
					        	</tbody>
			        		</table>
		                    
		               
			        </div>
			    </div>

			    </div>
			    <div className="container">
		            <div className="row col ">
					  	<Project />
					</div>
	    		</div>
	    	</div>
        </>
    )
}


export default Content