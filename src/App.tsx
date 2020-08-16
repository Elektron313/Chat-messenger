import React, { useEffect } from 'react';
import { Auth, Home } from './pages';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from './redux/store';
import { fetchUserData } from './redux/slices/userSlice';

const App: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { isAuth } = useSelector((state: AppStateType) => state.userReducer);
    useEffect(() => {
        dispatch(fetchUserData());
        history.push('/');
    }, []);
    return (
        <div className="wrapper">
            <Switch>
                <Route path={['/login', '/registry']}>
                    <Auth />
                </Route>
                <Route path={'/'}>{isAuth ? <Home /> : <Redirect to={'/login'} />}</Route>
            </Switch>
        </div>
    );
};

export default App;
