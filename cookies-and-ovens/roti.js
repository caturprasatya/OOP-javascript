class Cook {
    constructor(cake, time, timeToCook){
        this.nameCake = cake
        this.timeToStop = time
        this.timeToCook = timeToCook || 20 //menit
    }

    cooking () {
        let i = 5 //waktu untuk muncul dan loop
        let status = ''
        let cookAlmostReady = this.timeToCook - Math.round(this.timeToCook * 3 / 4)
        
        while ( i <= this.timeToStop) {
            if (i < cookAlmostReady) {
                status = 'mentah'
            } else if (i >= cookAlmostReady && i < this.timeToCook){
                status = 'hampir matang'
            } else if ( i === this.timeToCook){
                status = 'matang'
            } else {
                status = 'hangus'
            }
            console.log(`${this.nameCake}, menit ke ${i} : ${status}`)
            i += 5
        }
    }
}


module.exports = Cook