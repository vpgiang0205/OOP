import Employee from "../model/Employee.js";
import ListPerson from "../model/ListPerson.js";
import Person from "../model/Person.js";

const employee = new Employee();
const listPerson = new ListPerson();

const getEle = (id) => document.getElementById(id);

function getPerson() {
    let hoten = getEle('hoten').value;
    let diachi = getEle('diachi').value;
    let email = getEle('email').value;

    const person = new Person(hoten, diachi, email);

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