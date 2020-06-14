"use strict";
const num1Element = document.getElementById('num1'); // type casting, ts can't tell it's an input from its id
const num2Element = document.getElementById('num2');
// add ! in strict mode, ts doesn't know if the button element actually exists and throws an error when adding event listener to it
const buttonElement = document.querySelector('button');
// HTMLButtonElement is inferred type here since we're using querySelector with 'button'
// const buttonElement: HTMLButtonElement = document.querySelector('button');
// const numResults: Array<number> = []; // number, the value inside the array is the generic type
const numResults = [];
const textResults = [];
function add(num1, num2) {
    // union type - number or string
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2; // force it to a number
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value; // input value always returns a string!
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numResults.push(result);
    const stringResult = add(num1, num2);
    textResults.push(stringResult);
    console.log(result);
    console.log(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults, textResults);
});
// this promise returns a string which is a generic type
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split(' '));
});
