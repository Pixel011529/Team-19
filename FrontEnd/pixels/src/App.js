import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import ContactPage from './Pages/ContactPage';
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage';
import PageNotFound from './Pages/PageNotFound';
import LoginPage from './Pages/LoginPage';
import MyHousePage from './Pages/MyHousePage';
import LogoutPage from './Pages/LogoutPage';

import './sass/main.scss';

function App() {
    return (
        <div className="App">
            <Switch>
            <Route exact path='/' render={() => <Home />} />
				<Route
					exact
					path='/contact/:issue_id'
					render={(routeProps) => <ContactPage {...routeProps} />}
				/>
				<Route
					exact
					path='/login'
					render={(routeProps) => <LoginPage {...routeProps} />}
				/>
				<Route exact path='/logout' render={() => <LogoutPage />} />
				<Route exact path='/privacyPolicy' render={() => <PrivacyPolicyPage />} />
				<Route exact path='/myHouse' render={() => <MyHousePage />} />
				<Route exact render={() => <PageNotFound />} />
            </Switch>
        </div>
    );
}

export default App;
