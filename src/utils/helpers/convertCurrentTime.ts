const convertCurrentTime = (number: number): string => {
    const mins = Math.floor(number / 60);
    const secs = parseInt((number % 60).toFixed(), 10);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

export default convertCurrentTime;
