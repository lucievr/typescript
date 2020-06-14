var num1Element = document.getElementById('num1'); // type casting, ts can't tell it's an input from its id
var num2Element = document.getElementById('num2');
var buttonElement = document.querySelector('button');
// HTMLButtonElement is inferred type here since we're using querySelector with 'button'
// const buttonElement: HTMLButtonElement = document.querySelector('button');
function add(num1, num2) {
    return num1 + num2;
}
;
buttonElement.addEventListener('click', function () {
    var num1 = num1Element.value; // input value always returns a string!
    var num2 = num2Element.value;
    var result = add(+num1, +num2); // we need to convert it to a number
    console.log(result);
});
