import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import LogoutPage from './Pages/LogoutPage';

import './sass/main.scss';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' render={() => <Home />} />
                <Route
                    exact
                    path='/login'
                    render={(routeProps) => <LoginPage {...routeProps} />}
                />
				<Route exact path='/logout' render={() => <LogoutPage />} />
            </Switch>
        </div>
    );
}

export default App;
