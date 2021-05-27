const Ingredients = require('./ingredient')

class Cookie {
    constructor(name, ingredients){
        this.name = name
        this.status = 'mentah'
        this.has_sugar= this.checkSugar(ingredients) || false
        this.ingredients = this.addIngredients(ingredients)
    }

    bake() {
        this.status = 'selesai dimasak'
    }

    addIngredients(ingredients) {
        let cake = ingredients.split(', ')
        let ingred = []

        for (let i = 0; i < cake.length; i++) {
            let splitIngred = cake[i].split(' : ')
            ingred.push(new Ingredients(splitIngred[0], splitIngred[1]))
        }

        return ingred
    }

    checkSugar(ingredients) {
        let checkIng = ingredients.split(', ')

        for (let i = 0; i < checkIng.length; i++) {
            let findIng = checkIng[i].split(' : ')

            if(findIng[1] === 'sugar') return true
        }
    }
}
class PeanutButter extends Cookie {
    constructor(name, ingredients){
        super(name, ingredients)
        this.peanut_cont = 100
    }
}

class ChocolateChip extends Cookie {
    constructor(name, ingredients) {
        super(name, ingredients)
        this.choc_chip_cont = 200
    }
}

class ChocalateChipCrumbled extends Cookie {
    constructor(name, ingredients) {
        super(name, ingredients)
        this.choc_chip_cont = 200
    }
}

class PeanutButterCrumbled extends Cookie {
    constructor(name, ingredients) {
        super(name, ingredients)
        this.penut_cont = 150
    }
}

class OtherCookie extends Cookie {
    constructor(name, ingredients) {
        super(name, ingredients)
        this.other_cont = 150
    }
}


module.exports = {PeanutButter, ChocolateChip, ChocalateChipCrumbled, PeanutButterCrumbled, OtherCookie}