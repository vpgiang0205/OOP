export default class ListPerson {
    constructor() {
        this.arr = [];
    }

    addToArr(person) {
        this.arr.push(person);
    }

    findPersonIndex(email){
       return this.arr.findIndex( person => person.email === email)
    }

    deletePerson(email){
        var personIndex = this.findPersonIndex(email)
        console.log(personIndex)
        if (personIndex !== -1) {
            this.arr.splice(personIndex);
            console.log(this.arr)
        }
    }
}
