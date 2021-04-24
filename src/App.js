
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Content'
           

const App = () => {
    return(
        <div>
        	<switch>
                <Route exact path="/" component={Home}/>
            </switch>
        </div>
    )
}

export default App