import React from 'react';
import classNames from 'classnames';
import './status.scss';

type Status = {
    online: boolean;
};
const Status: React.FC<Status> = ({ online }) => {
    return <span className={classNames('status', { 'status--online': online })}>{online ? 'онлайн' : 'офлайн'}</span>;
};

export default Status;
