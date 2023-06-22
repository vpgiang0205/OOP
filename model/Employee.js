import Person from "./Person.js";
export default class Employee extends Person {
    constructor(hoten, diachi, email, songaylamviec, luongtheongay) {
        super(hoten, diachi, email);

        songaylamviec = 0;
        luongtheongay = 0;
    }
}