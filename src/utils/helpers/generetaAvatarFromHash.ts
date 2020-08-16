import tinycolor from 'tinycolor2';

const getCorrectIndex = (number: number): number => {
    return number > 255 ? 255 : number < 0 ? 0 : number;
};

type GeneretaColor = {
    color: string;
    colorLighten: string;
};
export default (hash: string): GeneretaColor => {
    const [r, g, b] = hash
        .substr(0, 3)
        .split('')
        .map((char: string) => getCorrectIndex(char.charCodeAt(0)));

    return {
        color: tinycolor({ r, g, b }).lighten(10).saturate(10).toHexString(),
        colorLighten: tinycolor({ r, g, b }).lighten(30).saturate(30).toHexString(),
    };
};
