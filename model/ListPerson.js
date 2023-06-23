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
    sortAZ(){
        let mangTheoChuCai = this.arr.sort((a, b) => {
            let tenA = a.hoten.toLowerCase();
            let tenB = b.hoten.toLowerCase();

            if (tenA < tenB) {
                return -1; // Đẩy 'a' lên trước 'b'
            } else if (tenA > tenB) {
                return 1; // Đẩy 'b' lên trước 'a'
            } else {
                return 0; // Giữ nguyên vị trí
            }
        });
        return mangTheoChuCai
    }
}

