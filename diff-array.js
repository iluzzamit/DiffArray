/*
* DiffArray gets an array of numbers as input O(n)
* update function let the ability to update range of numbers in the array O(1)
* get calculate the new array and return it to the user O(n)
*/


class DiffArray {
    diffArray;

    constructor(array) {
        this.init(array);
    }

    init(original) {
        let length = original.length;

        this.diffArray = [];
        this.diffArray[0] = original[0];
        this.diffArray[length] = 0;

        for (let i = 1; i < length; i++) {
            this.diffArray[i] = original[i] - original[i - 1];
        }
    }

    update(left, right, value) {
        this.diffArray[left] += value;
        this.diffArray[right + 1] -= value;
    }

    get() {
        const array = Array(this.diffArray.length - 1);
        for (let i = 0; i < array.length; i++) {
            if (i == 0) {
                array[i] = this.diffArray[i];
            } else {
                array[i] = this.diffArray[i] + array[i - 1];
            }
        }
        return array;
    }

}

// Test 1
const diffArray = new DiffArray([1, 2, 3, 4, 5]);
diffArray.update(2, 3, 5);
console.log(diffArray.get()) // [1,2,9,10,5]

// Test 2
const diffArray2 = new DiffArray([10, 23, 5, 7, 42, 13]);
diffArray2.update(2, 3, 5);
diffArray2.update(2, 3, -5);
diffArray2.update(1, 2, 3);
diffArray2.update(1, 2, -3);
console.log(diffArray2.get()) // [10, 23, 5, 7, 42, 13]

// Test 3
const diffArray3 = new DiffArray([9, 8, 7, 6, 5, 4, 3, 2, 1]);
diffArray3.update(1, 5, 25);
diffArray3.update(4, 2, 13);
diffArray3.update(5, 6, 2);
diffArray3.update(1, 3, -40);
console.log(diffArray3.get()) // [9, -7, -8, -22, 30, 31, 5, 2, 1]




