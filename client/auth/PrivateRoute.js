import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './auth-helper';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        auth.isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{
                pathname: '/signin',
                state: { from: props.location }
            }} />
        )
    )}/>
);

export default PrivateRoute;

// Components to be rendered in this component will only load when
// the user is authenticated, which is determined by a call to the
// isAuthenticated method, otherwise the user will be redirected
// to the Signin component. Components that should have restricted
// access, such as the user profile component, should be loaded 
//here