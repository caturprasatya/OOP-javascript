const Cook = require ('./roti')

class RotiKacang extends Cook{
    constructor (cake, time) {
        super(cake,time, 30)
    }
}

module.exports = RotiKacang