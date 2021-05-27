const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor() {
        this.listTree = []
        this.listAge = []
        this.trees = []
        this.listDeadTrees = []
        this.listMatureTree = []    
    }

    inputTree(name, age, firstHigh, matureAge, healthStatus) {
        if (name === ' MangoTree') {
            this.listTree.push(new MangoTree(name, age, firstHigh, matureAge, healthStatus))
        } else if (name === ' AppleTree') {
            this.listTree.push(new AppleTree(name, age, firstHigh, matureAge, healthStatus))
        } else {
            this.listTree.push(new PearTree(name, age, firstHigh, matureAge, healthStatus))
        }
    }

    nextYear(){
        for (let i = 0; i <this.listTree.length; i++) {
            this.listTree[i].grow()
        }
    }

    showAges(){
        for (let i = 0; i < this.listTree.length; i++) {
            this.listAge.push(this.listTree[i].age)
        }
        console.log(this.listAge)
    }

    showTrees(){
        for (let i = 0; i < this.listTree.length; i++) {
            this.trees.push(this.listTree[i].name)
        }
        console.log(this.trees)
    }

    showMatureTrees(){
        for (let i = 0; i < this.listTree.length; i++) {
            if(this.listTree[i].age >= this.listTree[i].matureAge){
                this.listDeadTrees.push(this.listTree[i].name)
            }
        }
        console.log(this.listMatureTree)
    }

    showDeadTrees(){
        for (let i = 0; i < this.listTree.length; i++) {
            if(this.listTree[i].age >= this.listTree[i].maxAge){
                this.listDeadTrees.push(this.listTree[i].name)
            }
        }
        console.log(this.listDeadTrees);
    }
}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12 ,true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)


// next year
grove.nextYear()

// show trees ages
grove.showAges()

// show trees
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()
