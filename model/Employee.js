import Person from "./Person.js";
export default class Employee extends Person {
    constructor(id, hoten, diachi, email, chucvu, songaylamviec, luongtheongay, luong) {
        super(id, hoten, diachi, email);
        this.chucvu = chucvu
        this.songaylamviec = songaylamviec;
        this.luongtheongay = luongtheongay;
        luong = 0
    }
    tinhLuong(){
        this.luong = this.songaylamviec * this.luongtheongay
        console.log(this.luong)
    }
}