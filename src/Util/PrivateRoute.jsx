import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthManager from './AuthManager'

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        AuthManager.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to='/login'/>
    )}/>
);

export default PrivateRoute;