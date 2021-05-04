import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../Components/Home'
import CreateExpensePage from '../Components/CreateExpensePage'
import Edit from '../Components/Edit'
import Header from '../Components/Header'
import Help from '../Components/Help'
import PageNotFound from '../Components/PageNotFound'



 
const AppRoute = () => {
    return ( 
        <BrowserRouter>
        <div>
        <Header />
        <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/create-expense-page" component={CreateExpensePage} />
        <Route path="/help" component={Help}  />
        <Route path="/edit/:id" component={Edit}  />
        <Route component={PageNotFound}  />
        </Switch>
        </div>
        </BrowserRouter>
     );
}
 
export default AppRoute;

