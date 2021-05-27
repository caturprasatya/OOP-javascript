"use strict"

// Release 0
class MangoTree {
    // Initialize a new MangoTree
    constructor () {
        this._age = 0 // tahun
        this._height = 0 //meter
        this.matureAge = 10 //tahun
        this._healthStatus = true
        this.maxHeight = 20 // meter
        this.maxAge = 30 //tahun
        this._fruits = []
        this._harvested = ''
        this.status = {
            good : 0,
            bad : 0
        }
    }

    get age () {
        return this._age
    }

    get height () {
        return this._height
    }

    get fruits () {
        return this._fruits
    }

    get healthStatus () {
        return this._healthStatus
    }

    get harvested () {
        return this._harvested
    }

    // Get current states here

    // Grow the tree
    grow () {
        this._age += 1
        let randomGrow = Math.ceil((Math.random() * 2))
        if (this._age >= this.maxAge) {
            this._healthStatus = false
        } 
        if (this._age <= this.maxHeight) {
            this._height += randomGrow
            
        }
    }

    // Produce some mangoes
    produceMangoes () {
        let buahRandom = Math.ceil(Math.random() * 10) + 5
        if (this._age >= this.matureAge) {
            for (let i = 0; i < buahRandom; i++) {
                this._fruits.push(new Mango())
            }
        }
    }
    
    // Get some fruits
    harvest () {
        this.status.Good = 0
        this.status.Bad = 0
        
        for (let i = 0; i < this._fruits.length; i++) {
            if (this._fruits[i].Status === 'Good') {
                this.status.Good++
            } else {
                this.status.Bad++
            }
            console.log(this._fruits[i].Status)
        }
        this._fruits = []

        if (!this._fruits.length) {
            this._harvested = 0
        } else {
            
        }
    }

}

class Mango {
    // Produce a mango
    constructor () {
        this.Status = this.generate()
    }

    generate () {
        let random = Math.ceil(Math.random() * 10)
        if (random % 2 === 0) return 'Good'
        return 'Bad'
    }
    
}

/**
  * driver code untuk release 0
  */
 
 let mangoTree = new MangoTree()


 do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     console.log(mangoTree.fruits)
    mangoTree.harvest();
    // console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} M| Fruits harvested = ${mangoTree.harvested}`)
    } while (mangoTree.healthStatus !== false);
    

// Release 1
    class AppleTree {}
    class Apple {}

// Release 2
    class FruitTree {}
    class Fruit {}
