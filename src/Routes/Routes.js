import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "../Pages/Home"
import Dicas from "../Pages/Dicas"

function Routes () {

    return(
        <BrowserRouter>
           <Switch>
               <Route path="/" exact component={Home}/>
               <Route path="/dicas" component={Dicas}/>
           </Switch>
        </BrowserRouter>
    )
}

export default Routes