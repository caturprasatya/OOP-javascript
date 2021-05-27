const Cook = require ('./roti')

class RotiCoklat extends Cook{
    constructor (cake, time) {
        super(cake,time, 25)
    }
}

module.exports = RotiCoklat