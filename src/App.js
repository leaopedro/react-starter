import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import PublicRoutes from './PublicRoutes'
import PrivateRoute from './Util/PrivateRoute'
import Login from './PublicRoutes/Login'
import Dashboard from './PrivateRoutes/Dashboard'
import './App.css';

const AppComponent = () => (
    <div className="app">
        <ul>
            <li><Link to="/public">Public Page</Link></li>
            <li><Link to="/auth/dashboard">Protected Page</Link></li>
        </ul>
        <Route path="/public" component={PublicRoutes}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/auth/dashboard" component={Dashboard}/>
    </div>
);

class App extends Component {
    render() {
        return (
            <Router>
                <AppComponent/>
            </Router>
        );
    }
}

export default App;
