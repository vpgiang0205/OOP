import Person from "./Person.js";

export default class Customer extends Person {
    constructor(id, hoten, diachi, email, tenct, trigia, danhgia, chucvu) {
        super(id, hoten, diachi, email);
        this.tenct = tenct;
        this.trigia = trigia;
        this.danhgia = danhgia;
        this.chucvu = chucvu
    }
}