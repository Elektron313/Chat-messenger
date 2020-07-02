import React from 'react';
import './auth.scss';
import { LoginForm } from '../../modules';
import RegisterForm from '../../modules/LoginForm/components/RegisterForm';
import { Route } from 'react-router-dom';

const Auth: React.FC = () => {
    return (
        <section className={'auth'}>
            <div className={'auth--content'}>
                <Route exact path={['/', '/login']} component={LoginForm} />
                <Route exact path="/registry" component={RegisterForm} />
            </div>
        </section>
    );
};

export default Auth;
