import React from 'react';
import { Form, Input } from 'antd';
import { MailOutlined } from '@ant-design/icons/lib';
import { Link } from 'react-router-dom';
import { Block, Button } from '../../../components';

const LoginForm: React.FC = () => {
    return (
        <div>
            <div className={'auth--top'}>
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста войдите в свой аккаунт</p>
            </div>
            <Block>
                <Form>
                    <Form.Item>
                        <Input
                            placeholder={'Введите e-mail'}
                            size={'large'}
                            prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder={'Введите пароль'} type={'password'} size={'large'} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" size="large">
                            Войти в аккаунт
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Link to={'registry'} className={'auth--register-link'}>
                            Зарегистрироваться
                        </Link>
                    </Form.Item>
                </Form>
            </Block>
        </div>
    );
};

export default LoginForm;
