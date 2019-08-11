import {math} from "./utill";

describe('Math', () => {

    it('addition', () => {
        expect(math['+'](1,2)).toEqual(3);
    });

    it('subtraction', () => {
        expect(math['-'](2,1)).toEqual(1);
    });

    it('multiplication', () => {
        expect(math['*'](1,2)).toEqual(2);
    });

    it('division', () => {
        expect(math['/'](8,2)).toEqual(4);
    });
});
