import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';

type Time = {
    date: Date;
};
const Time: React.FC<Time> = ({ date }) => {
    return <>{formatDistanceToNow(date, { addSuffix: true, locale: ruLocale })}</>;
};

export default Time;
