import React,{Component} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Resume from './Resume'


export default class Routing extends Component{
    render()
    {
        return(
            <BrowserRouter>

            <div>
                <Route exact path='/' component={Resume}></Route>
            </div>
            </BrowserRouter>
        )
    }
}