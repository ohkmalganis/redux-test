import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Results from "../components/results";
import Details from "../components/details";
import store from "../redux/store";

class Routes extends Component {
    render()
    {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/results" component={Results} />
                        <Route path="/details/:itemId" component={Details} />
                        <Redirect path="/" to="/results" />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default Routes;
