import React from 'react';
import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';

type Index = {
    errors: any;
    name: string;
    Image: React.ReactElement<any, any> | null;
    placeholder: string;
    defaultValue?: string;
    control: any;
    type?: string;
};
const FormField: React.FC<Index> = ({ errors, name, Image, placeholder, defaultValue = '', control, type }) => {
    return (
        <Form.Item help={errors[name] ? errors[name].message : null} validateStatus={errors[name] && 'error'}>
            <Controller
                as={<Input />}
                name={name}
                prefix={Image}
                size="large"
                placeholder={placeholder}
                control={control}
                defaultValue={defaultValue}
                type={type}
            />
        </Form.Item>
    );
};

export default FormField;
