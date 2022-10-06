import React from 'react';
import {Route, BrowserRouter as Router, Redirect, Switch} from "react-router-dom";
import Users from "./Components/Users/pages/Users";
import NewPlace from "./Components/Places/pages/NewPlace";
import Error from "./Components/Shared/Components/Error";
import MainNavigation from "./Components/Shared/Components/Navigation/MainNavigation";
import UserPlaces from "./Components/Places/pages/UserPlaces";
const App = () => {
    return (
        <Router>
            <MainNavigation/>
            <main>
                <Switch>
                    <Route path={'/'} component={Users} exact={true}/>
                    <Route path={'/places/new'} component={NewPlace} exact={true}/>
                    <Route path={'/error'} component={Error}/>
                    <Route path={'/:userId/places'} component={UserPlaces} exact/>

                </Switch>
            </main>
        </Router>
    )
}

export default App;
