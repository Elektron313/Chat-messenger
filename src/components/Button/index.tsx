import React from 'react';
import { Button as BaseButton } from 'antd';
import './Button.scss';
import classNames from 'classnames';
import { BaseButtonProps } from 'antd/lib/button/button';

type Button = {
    htmlType?: 'button' | 'submit' | 'reset' | undefined;
    disabled?: boolean;
};
const Button: React.FC<BaseButtonProps & Button> = (props) => {
    return (
        <BaseButton
            {...props}
            className={classNames('button', {
                'button--large': props.size === 'large',
            })}
        />
    );
};

export default Button;
