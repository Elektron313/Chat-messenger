import React from 'react';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { UserOutlined, MailOutlined, LockOutlined, InfoCircleOutlined } from '@ant-design/icons/lib';

import { Block, Button } from '../../../components';

type FormType = {
    email: string;
    user: string;
    password: string;
    're-password': string;
};

// const defaultValues = {
//     email: '',
//     user: '',
//     password: '',
//     're-password': '',
// };

const success = false;
const SignupSchema = yup.object().shape({
    email: yup.string().required().email(),
    user: yup.string().required(),
    password: yup
        .string()
        .required()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'Invalid'),
    're-password': yup.number().required(),
});

const RegisterForm: React.FC = () => {
    const { errors, handleSubmit, control } = useForm<FormType>({
        mode: 'onBlur',
        validationSchema: SignupSchema,
        // defaultValues,
    });
    const onSubmit = handleSubmit((data: FormType) => console.log(data));

    return (
        <div>
            <div className="auth--top">
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <Block>
                {!success ? (
                    <form onSubmit={onSubmit} className="login-form">
                        <Form.Item
                            help={errors.email ? errors.email.message : null}
                            validateStatus={errors.email && 'error'}
                        >
                            <Controller
                                as={<Input />}
                                name={'email'}
                                id="email"
                                prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                size="large"
                                placeholder="e-mail"
                                control={control}
                                defaultValue={''}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Controller
                                name={'user'}
                                as={<Input />}
                                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                size="large"
                                placeholder="Ваше имя"
                                control={control}
                                defaultValue={''}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Controller
                                name={'password'}
                                as={<Input />}
                                id="password"
                                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                size="large"
                                type="password"
                                placeholder="Пароль"
                                control={control}
                                defaultValue={''}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Controller
                                name={'re-password'}
                                as={<Input />}
                                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                size="large"
                                type="password"
                                placeholder="Повторите пароль"
                                control={control}
                                defaultValue={''}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" size="large" htmlType={'submit'}>
                                Зарегистрироваться
                            </Button>
                        </Form.Item>
                        <Link className="auth__register-link" to="/login">
                            Войти в аккаунт
                        </Link>
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
