"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    // data: number[];
    // constructor(data: number[]) {
    //   this.data = data;
    // }
    function NumbersCollection(data) {
        this.data = data;
    } // alternative syntax to the above
    Object.defineProperty(NumbersCollection.prototype, "length", {
        // getter/accesor - to access property length, not called as a func but e.g. as newCollection.length
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    // bubble sort: if left hand element greater than right, swap with right hand el
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
