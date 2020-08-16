import React from 'react';
import { Form } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { UserOutlined, MailOutlined, LockOutlined, InfoCircleOutlined } from '@ant-design/icons/lib';

import { Block, Button } from '../../components';
import FormField from '../../components/FormField';
import { requestRegistration } from '../../redux/slices/userSlice';
import { useDispatch } from 'react-redux';

export type RegisterFormType = {
    email: string;
    fullName: string;
    password: string;
    're-password': string;
};

const success = false;
const SignupSchema = yup.object().shape({
    email: yup.string().required('Заполните поле').email(),
    fullName: yup.string().required('Заполните поле').min(3, 'Слишком короткий пароль минимум 3 символов'),
    password: yup
        .string()
        .required('Пароль не введен')
        .min(8, 'Слишком короткий пароль минимум 8 символов')
        .matches(/[a-zA-Z]/, 'Пароль должен состоять из латинских букв'),
    password_2: yup
        .string()
        .required('Пароль не введен')
        .oneOf([yup.ref('password')], 'Пароли не совпадают'),
});

const RegisterForm: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { errors, handleSubmit, control } = useForm<RegisterFormType>({
        mode: 'onBlur',
        validationSchema: SignupSchema,
    });
    const onSubmit = handleSubmit(({ fullName, email, password }: RegisterFormType) => {
        console.log({ fullName, email, password });
        dispatch(requestRegistration({ fullName, email, password }, history));
    });

    return (
        <div>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <Block>
                {!success ? (
                    <form onSubmit={onSubmit} className="login-form">
                        <FormField
                            errors={errors}
                            name={'email'}
                            Image={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder={'Введите e-mail'}
                            control={control}
                        />
                        <FormField
                            errors={errors}
                            name={'fullName'}
                            Image={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder={'Введите полное имя'}
                            control={control}
                        />
                        <FormField
                            errors={errors}
                            name={'password'}
                            Image={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder={'Введите пароль'}
                            control={control}
                            type={'password'}
                        />
                        <FormField
                            errors={errors}
                            name={'password_2'}
                            Image={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder={'Введите повторно пароль'}
                            control={control}
                            type={'password'}
                        />
                        <Form.Item>
                            <Button type="primary" size="large" htmlType={'submit'}>
                                Зарегистрироваться
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Link className="auth__register-link" to="/login">
                                Войти в аккаунт
                            </Link>
                        </Form.Item>
                    </form>
                ) : (
                    <div className="auth__success-block">
                        <div>
                            <InfoCircleOutlined />
                        </div>
                        <h2>Подтвердите свой аккаунт</h2>
                        <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
                    </div>
                )}
            </Block>
        </div>
    );
};

export default RegisterForm;
