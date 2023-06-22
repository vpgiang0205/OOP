import Person from "./Person.js";

export default class Student extends Person {
    constructor(hoten, diachi, email, toan, ly, hoa) {
        super(hoten, diachi, email);
    }
}