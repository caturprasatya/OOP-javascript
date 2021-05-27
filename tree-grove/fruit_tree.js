class FruitTree {
    // Initialize a new MangoTree
    constructor (name, age, firstHeight, matureAge, healthStatus, maxAge) {
        this.name = name
        this._age = age || 0// tahun
        this._height = firstHeight || 0 //meter
        this.matureAge = matureAge || 10 //tahun
        this._healthStatus = healthStatus || true
        this.maxAge = maxAge||20 //tahun
        this._harvested = ''
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
        
         this._height += randomGrow
    }

    // Produce some mangoes
    produce () {
        let buahRandom = Math.ceil(Math.random() * 10) + 5
        if (this._age >= this.matureAge) {
            for (let i = 0; i < buahRandom; i++) {
                this._fruits.push(new Fruit())
            }
        }
    }
    
    // Get some fruits
    harvest () {
        let Good = 0
        let Bad = 0
        
        for (let i = 0; i < this._fruits.length; i++) {
            if (this._fruits[i].Status === 'Good') {
                Good++
            } else {
                Bad++
            }
        }
        if (!this._fruits.length) {
            this._harvested = 0
        } else {
            this._harvested = `${this._fruits.length} (${Good} Good ${Bad} Bad)`
        }

        this._fruits = []
    }

}

class Fruit {
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

module.exports = {
    FruitTree,
    Fruit
}