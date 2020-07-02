import React from 'react';
import { Auth, Home } from './pages';
import { Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <div className="wrapper">
            <Switch>
                <Route exact path={['/', '/login', '/registry']}>
                    <Auth />
                </Route>
                <Route path={'/im'}>
                    <Home />
                </Route>
            </Switch>
        </div>
    );
};

export default App;
