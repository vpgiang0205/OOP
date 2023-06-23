import Employee from "../model/Employee.js";
import ListPerson from "../model/ListPerson.js";
import Person from "../model/Person.js";
import Student from "../model/Student.js";
import Customer from "../model/Customer.js";

const employee = new Employee();
const listPerson = new ListPerson();

const getEle = (id) => document.getElementById(id);

let nextId = 1;
function getPerson() {
    console.log(statedef)
    let hoten = getEle('hoten').value;
    let diachi = getEle('diachi').value;
    let email = getEle('email').value;

    let id = nextId++;
    if (statedef == 'Customer') {
        let tenct = getEle('tenct').value
        let trigia = getEle('trigia').value * 1
        let danhgia = getEle('danhgia').value
        const customer = new Customer(id, hoten, diachi, email, tenct, trigia, danhgia);
        console.log(customer);
        return customer;

    }
    if (statedef == 'Student') {
        let toan = getEle('toan').value * 1
        let ly = getEle('ly').value * 1
        let hoa = getEle('hoa').value * 1
        const student = new Student(id, hoten, diachi, email, toan, ly, hoa)
        console.log(student);
        student.tinhDTB();
        return student;

    }
    if (statedef == 'Employee') {
        let ngaylamviec = getEle('ngaylamviec').value * 1
        let luongtheongay = getEle('luongtheongay').value * 1
        const employee = new Employee(id, hoten, diachi, email, ngaylamviec, luongtheongay)
        console.log(employee)
        employee.tinhLuong();
        return employee;
    }
}

function renderPerson(data) {
    let content = ""; // Accumulate the content outside the loop
    for (let i = 0; i < data.length; i++) {
        let eachperson = data[i];
        let luong = eachperson.luong !== undefined ? eachperson.luong : "N/A";

        let dtb = eachperson.dtb || "N/A";
        content += `
      <tr>
        <td>${eachperson.hoten}</td>
        <td>${eachperson.diachi}</td>
        <td>${eachperson.email}</td>
        <td>${luong}</td>
        <td>${dtb}</td>
        <td>
        <button class="btn btn-info" onclick="btnEdit('${eachperson.id}')">Edit</button>
        <button class="btn btn-danger" onclick="btnDelete('${eachperson.id}')">Delete</button></td>
      </tr>
    `;
    }
    getEle('tblManager').innerHTML = content; // Set the content after the loop
}

let statedef = "";
window.showMoreOption = (value) => {
    if (value.length != 0) {
        if (value === 'Customer') {
            getEle('hiddenCustomer').style.display = 'block';
            getEle('hiddenStudent').style.display = 'none';
            getEle('hiddenEmployee').style.display = 'none';
            statedef = "Customer"
            console.log(statedef)
        }
        if (value === 'Student') {
            getEle('hiddenCustomer').style.display = 'none';
            getEle('hiddenStudent').style.display = 'block';
            getEle('hiddenEmployee').style.display = 'none';
            statedef = "Student"
        }
        if (value === 'Employee') {
            getEle('hiddenCustomer').style.display = 'none';
            getEle('hiddenStudent').style.display = 'none';
            getEle('hiddenEmployee').style.display = 'block';
            statedef = "Employee"
        }
    }
    else {
        getEle('hiddenEmployee').style.display = 'none';
        getEle('hiddenCustomer').style.display = 'none';
        getEle('hiddenStudent').style.display = 'none';
        statedef = ""
    }
};


// Button: Delete
window.btnDelete = (id) => {
    listPerson.deletePerson(id)
    setLocalStorage();
    renderPerson(listPerson.arr);
}

// Button: Add
window.addBtn = () => {
    let person = getPerson()
    console.log(person)
    if (person) {
        listPerson.addToArr(person);
        setLocalStorage();
        renderPerson(listPerson.arr);
    }
};

// LocalStorage
function setLocalStorage() {
    var dataString = JSON.stringify(listPerson.arr);
    localStorage.setItem("listPerson", dataString);
}

function getLocalStorage() {
    if (localStorage.getItem("listPerson")) {
        var dataString = localStorage.getItem("listPerson");
        listPerson.arr = JSON.parse(dataString);
        renderPerson(listPerson.arr);
        console.log(listPerson.arr);
    }
}

getLocalStorage();