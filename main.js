'use strict';
const REQUEST_URL = 'https://reqres.in/api/unknown?per_page=12';
const TABLE_BODY = document.querySelector(".table__body");
const FORM = document.querySelector(".main-form");
let content;
let newContent;
async function getResponce() {
  let responce = await fetch(REQUEST_URL);
  content = await responce.json();
  newContent = content.data;
  console.log(newContent);
  for (let key in newContent) {
    TABLE_BODY.innerHTML += `
    <tr><td class="id">${newContent[key].id}</td>
    <td class="name">${newContent[key].name}</td>
    <td class="year">${newContent[key].year}</td>
    <td class="color">${newContent[key].color}</td>
    <td class="pantone_value">${newContent[key].pantone_value}</td>
    </tr>`
    console.log(newContent[key])
  }
}

function toggleForm() {

}

getResponce();
FORM.addEventListener("change", toggleForm);
