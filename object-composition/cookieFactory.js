const {PeanutButter, ChocolateChip, ChocalateChipCrumbled, PeanutButterCrumbled, OtherCookie} = require('./index')
const fs = require('fs')
const listMenu = fs.readFileSync('./cookies.txt', 'utf8').split('\n')

class CookieFactory {
    static create (cookie, ingredients) {
        let data = ''

        if (cookie === 'Peanut Butter') {
            data = new PeanutButter(cookie, ingredients)
        } else if (cookie === 'Chocolate Chip') {
            data = new ChocolateChip(cookie, ingredients)
        } else if (cookie === 'ChocalateChipCrumbled') {
            data = new ChocalateChipCrumbled(cookie, ingredients)
        } else if (cookie === 'PeanutButterCrumbled') {
            data = new PeanutButterCrumbled(cookie, ingredients)
        } else {
            data = new OtherCookie(cookie, ingredients)   
        }
        return data
    }

    static cookieRecomendation(day, listCookie){
        let data = []
        for (let i = 0; i < listCookie.length; i++) {
            if (listCookie[i].has_sugar === false) {
                data.push(listCookie[i])
            }
        }
        return data
    }
}

let batch_of_cookies = []

for (let i = 0 ; i < listMenu.length ; i++) {
    option = listMenu[i].split(' = ')

    batch_of_cookies.push(CookieFactory.create(option[0], option[1]))
}
let sugarFreeFood = CookieFactory.cookieRecomendation('tuesday', batch_of_cookies)
// console.log(batch_of_cookies)
console.log(batch_of_cookies[0].ingredients)
console.log('=================================')
console.log('=================================')
console.log('|   Sugar free food are :       |')
for (let i = 0; i < sugarFreeFood.length; i++) {
    console.table(`|       ${sugarFreeFood[i].name}    `)
}
console.log('|                               |')
console.log('=================================')
console.log('=================================')
