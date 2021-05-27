// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here
const RotiCoklat = require ('./roti_coklat')
const RotiKacang = require ('./roti_kacang')
const RotiKeju = require ('./roti_keju')  

class Cake {
    constructor(){
        this.listCake = ''
    }

    inputBatter(cake, time) {
        if (cake === 'roti coklat') {
            this.listCake = new RotiCoklat(cake,time)
        } else if (cake === 'roti kacang') {
            this.listCake = new RotiKacang(cake,time)
        } else {
            this.listCake = new RotiKeju(cake,time)
        }
    }

    printCake() {
        this.listCake.cooking()
    }
}

let cook = new Cake()

console.log(` ======================`)
console.log(` |                    |`)
console.log(` |                    |`)
console.log(` |Oven is Ready To Use`)
console.log(` |                    |`)
console.log(` |                    |`)
console.log(` ======================`)
cook.inputBatter('roti kacang',50)
cook.printCake()
console.log(` ======================`)
console.log(` |                    |`)
console.log(` |                    |`)
console.log(` |  Cookies is Ready  |`)
console.log(` |                    |`)
console.log(` |                    |`)
console.log(` ======================`)