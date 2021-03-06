import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  // data: number[];
  // constructor(data: number[]) {
  //   this.data = data;
  // }
  constructor(public data: number[]) { // alternative syntax to the above
    super(); // to ensure the constructor of parent class Sorter gets implemented
  }

  // getter/accesor - to access property length, not called as a func but e.g. as newCollection.length
  get length(): number {
    return this.data.length;
  }

  // bubble sort: if left hand element greater than right, swap with right hand el

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
