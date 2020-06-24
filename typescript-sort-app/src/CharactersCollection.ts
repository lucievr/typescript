import { Sortable } from './Sorter';

export class CharactersCollection implements Sortable {
  constructor(public data: string) { }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    // need to compare lower case chars, > uses charCodeAt() method which returns the Unicode of the char
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split(''); // split string into an array of single chars
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    this.data = characters.join(''); // join into a string again
  }
}
