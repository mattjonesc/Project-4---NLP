import { isValidURL } from "../src/client/js/isValidURL.js"
    
describe("Testing the URL validity functionality", () => { 
    test("Testing the isValidURL() function", () => {
          expect(isValidURL('https://espn.com/')).toBeTruthy();
          expect(isValidURL('fart')).toBeFalsy();
    })});