"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
// import { NumbersCollection } from './NumbersCollection';
// import { CharactersCollection } from './CharactersCollection'
var LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([100, 30, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
// const charactersCollection = new CharactersCollection('XgNam');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(4);
linkedList.add(-3);
var sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
