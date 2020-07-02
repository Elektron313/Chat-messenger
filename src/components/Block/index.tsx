import React from 'react';
import './block.scss';
import classNames from 'classnames';

type Block = {
    className?: string;
};
const Block: React.FC<Block> = ({ children, className }) => {
    return <div className={classNames('block', className)}>{children}</div>;
};
export default Block;
