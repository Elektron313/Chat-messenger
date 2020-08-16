import React from 'react';
import './auth.scss';
import { LoginForm } from '../../modules';
import RegisterForm from '../../modules/RegisterForm/RegisterFormType';
import { Route } from 'react-router-dom';
import CheckEmailInfo from './components/CheckEmailInfo';

const Auth: React.FC = () => {
    return (
        <section className={'auth'}>
            <div className={'auth--content'}>
                <Route exact path={'/login'} component={LoginForm} />
                <Route exact path="/registry" component={RegisterForm} />
                <Route exact path={'/registry/verify'} component={CheckEmailInfo} />
            </div>
        </section>
    );
};

export default Auth;
