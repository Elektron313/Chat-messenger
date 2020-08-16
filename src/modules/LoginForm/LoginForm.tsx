import React from 'react';
import { Form, Input } from 'antd';
import { MailOutlined } from '@ant-design/icons/lib';
import { Link, useHistory } from 'react-router-dom';
import { Block, Button } from '../../components';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { fetchUserLogin } from '../../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';

const SignupSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup
        .string()
        .required()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'Invalid'),
});

export type Login = {
    email: string;
    password: string;
};

const LoginForm: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isFetching = useSelector((state: AppStateType) => state.userReducer.isFetching);
    const { errors, handleSubmit, control } = useForm<Login>({
        mode: 'onBlur',
        validationSchema: SignupSchema,
    });

    const onSubmit = handleSubmit(async (data: Login) => {
        dispatch(fetchUserLogin(data, history));
    });

    return (
        <div>
            <div className={'auth__top'}>
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста войдите в свой аккаунт</p>
            </div>
            <Block>
                <form onSubmit={onSubmit} name={'auth'}>
                    <Form.Item
                        help={errors.email ? errors.email.message : null}
                        validateStatus={errors.email && 'error'}
                    >
                        <Controller
                            as={<Input />}
                            placeholder={'Введите e-mail'}
                            name={'email'}
                            size={'large'}
                            prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                            control={control}
                            defaultValue={''}
                        />
                    </Form.Item>
                    <Form.Item
                        help={errors.password ? errors.password.message : null}
                        validateStatus={errors.password && 'error'}
                    >
                        <Controller
                            as={<Input />}
                            placeholder={'Введите пароль'}
                            name={'password'}
                            type={'password'}
                            size={'large'}
                            prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                            control={control}
                            defaultValue={''}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" size="large" htmlType={'submit'} disabled={isFetching}>
                            Войти в аккаунт
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Link to={'registry'} className={'auth__register-link'}>
                            Зарегистрироваться
                        </Link>
                    </Form.Item>
                </form>
            </Block>
        </div>
    );
};

export default LoginForm;
