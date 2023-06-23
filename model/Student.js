import Person from "./Person.js";

export default class Student extends Person {
    constructor(id, hoten, diachi, email, toan, ly, hoa, chucvu, dtb) {
        super(id, hoten, diachi, email);
        this.toan = toan
        this.ly = ly
        this.hoa = hoa
        this.chucvu = chucvu
        dtb = 0
    }
    tinhDTB(){
        this.dtb = (this.toan + this.ly + this.hoa )/ 3 
        console.log(this.dtb)
    }
}