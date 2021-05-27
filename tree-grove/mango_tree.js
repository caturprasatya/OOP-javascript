const {FruitTree, Fruit} = require('./fruit_tree')

class MangoTree extends FruitTree{
    constructor(name, bornAge, firstHigh, matureAge, healthStatus){
        super(name, bornAge, firstHigh, matureAge, healthStatus)
    }

    produce () {
        let buahRandom = Math.ceil(Math.random() * 10) + 5
        if (this._age >= this.matureAge) {
            for (let i = 0; i < buahRandom; i++) {
                this._fruits.push(new MangoFruit())
            }
        }
    }
    
}

class MangoFruit extends Fruit{
    constructor(){
        super()
    }
}


module.exports = MangoTree