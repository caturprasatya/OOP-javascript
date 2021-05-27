class NotesStore {
  //add your code here
  constructor(){
      this.notes= {
        active: [],
        completed: [],
        others: []
      } //this object of array
  }
  addNote(state, name){
      if(state.toLowerCase() === 'active' || state.toLowerCase() === 'completed' || state.toLowerCase() === 'others'){
          this.notes[state.toLowerCase()] = []
          // return this.notes
          this.notes[state.toLowerCase()].push(name)
          // console.log(this.notes);
      } else {
          return 'Name cannot be empty'
      }
  }
  getNotes(state){
      if(state.toLowerCase() !== 'active' && state.toLowerCase() !== 'completed'){
          console.log(`Error: Invalid state ${state}`)
      } else {
          console.log(this.notes[state.toLowerCase()])
      }
  }
}

const obj = new NotesStore()

obj.addNote('active', 'makan')
obj.addNote('others', 'makan')
obj.getNotes('others')
