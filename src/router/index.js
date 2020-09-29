import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SpaceX from '../container/SpaceX';

class CustomRoute extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Route exact path="/" component={SpaceX} />
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default CustomRoute;