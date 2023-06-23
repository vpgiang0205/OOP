export default class ListPerson {
    constructor() {
        this.arr = [];
        this.nextId = 1;
    }

    addToArr(person) {
        person.id = this.nextId++;
        this.arr.push(person);
    }

    findPersonId(id) {
        console.log(id);
        return  this.arr.find((person) => person.id == id);
    }

    deletePerson(id) {
        var personId = this.findPersonId(id);
        if (personId !== -1) {
            var personIndex = this.arr.indexOf(personId);
            this.arr.splice(personIndex, 1);
            console.log(this.arr);
        }
    }

}
