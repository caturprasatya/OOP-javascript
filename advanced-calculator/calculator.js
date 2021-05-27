'use strict'

class Calculator {
  //write your code here
    constructor () {
    this.value = 0    
    }
    
    add (num = 0) {
        this.value += num

        return this
    }
    subtract (num = 0) {
        this.value -= num
    
        return this
    }
    multiply (num = 1) {
        this.value = this.value * num

        return this
    }
    divide (num = 1) {
        this.value = this.value / num

        return this
    }
    square (num = 0, nums = 1) {
        this.value += Math.pow(num, nums)

        return this
    }
    squareRoot (num = 1) {
        this.value += Math.sqrt(num)

        return this
    }

    countTheCircle(num) {
        this.value += 2 * Math.PI * num ** 2

        return this
    }

    printValue () {
        console.log(`${this.value}`)
    }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
