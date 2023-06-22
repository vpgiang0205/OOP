import Employee from "../model/Employee.js";
import ListPerson from "../model/ListPerson.js";
import Person from "../model/Person.js";
import Student from "../model/Student.js";
import Customer from "../model/Customer.js";

const employee = new Employee();
const listPerson = new ListPerson();

const getEle = (id) => document.getElementById(id);

function getPerson() {
    console.log(statedef)
    let hoten = getEle('hoten').value;
    let diachi = getEle('diachi').value;
    let email = getEle('email').value;

    
    if (statedef == 'Customer') {
        let tenct = getEle('tenct').value
        let trigia = getEle('trigia').value
        let danhgia = getEle('danhgia').value
        
        const customer = new Customer(tenct, trigia, danhgia);

        console.log(customer);
        return customer;

    }
    if (statedef == 'Student') {
        let toan = getEle('toan').value
        let ly = getEle('ly').value
        let hoa = getEle('hoa').value
        const student = new Student(toan, ly, hoa)
        chucvu.push(student)
        console.log(person)

    }
    if (statedef == 'Employee') {
        let ngaylamviec = getEle('ngaylamviec').value
        let luongtheongay = getEle('luongtheongay').value
        const employee = new Employee(ngaylamviec, luongtheongay)
        console.log(employee)
    }
    const person = new Person(hoten, diachi, email);
    console.log(person);
    return person;
}

function renderPerson(data) {
    let content = ""; // Accumulate the content outside the loop
    for (let i = 0; i < data.length; i++) {
        let eachperson = data[i];
        content += `
      <tr>
        <td>${eachperson.hoten}</td>
        <td>${eachperson.diachi}</td>
        <td>${eachperson.email}</td>
        <td>
        <button class="btn btn-info" onclick="btnDelete('${eachperson.email}')">Delete</button></td>
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
window.btnDelete = (email) => {
    listPerson.deletePerson(email)
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