import Person from "./Person.js";

export default class Customer extends Person {
    constructor(id, hoten, diachi, email, tenct, trigia, danhgia) {
        super(id, hoten, diachi, email);
        this.tenct = tenct;
        this.trigia = trigia;
        this.danhgia = danhgia;
    }
}