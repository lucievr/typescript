const num1Element = document.getElementById('num1') as HTMLInputElement; // type casting, ts can't tell it's an input from its id
const num2Element = document.getElementById('num2') as HTMLInputElement;
// add ! in strict mode, ts doesn't know if the button element actually exists and throws an error when adding event listener to it
const buttonElement = document.querySelector('button')!;
// HTMLButtonElement is inferred type here since we're using querySelector with 'button'
// const buttonElement: HTMLButtonElement = document.querySelector('button');

function add(num1: number, num2: number) {
  return num1 + num2;
};

buttonElement.addEventListener('click', () => {
  const num1 = num1Element.value; // input value always returns a string!
  const num2 = num2Element.value;
  const result = add(+num1, +num2); // we need to convert it to a number
  console.log(result);
});
