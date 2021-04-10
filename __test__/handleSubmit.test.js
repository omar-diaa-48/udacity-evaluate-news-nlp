
const jest = require('jest');
import {handleSubmit} from '../src/client/js/handleSubmit';

describe("Testing the submit functionality", () => {    
    test("handleSubmit() to be defined", () => {
        expect(handleSubmit).toBeDefined();
    })
})
