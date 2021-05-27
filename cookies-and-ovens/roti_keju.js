const Cook = require ('./roti')

class RotiKeju extends Cook{
    constructor (cake, time) {
        super(cake,time, 20)
    }
}

module.exports = RotiKeju