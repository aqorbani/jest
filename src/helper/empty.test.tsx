import { utils } from "./empty";

describe("utils", () => {
    test("isEmpty should work", () => {
        const testCase01 = " ";
        const testCase02 = "     ";
        const testCase03 = "test";
        const testCase04 = "test  ";

        expect(utils.isEmpty(testCase01)).toBeTruthy();
        expect(utils.isEmpty(testCase02)).toBeTruthy();
        expect(utils.isEmpty(testCase03)).toBeFalsy();
        expect(utils.isEmpty(testCase04)).toBeFalsy();
    })
})