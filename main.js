'use strict';
const REQUEST_URL = 'https://reqres.in/api/unknown?per_page=12';
const TABLE_BODY = document.querySelector(".table__body");
const FORM = document.querySelector(".main-form");
const BTN_RESET = document.querySelector(".reset");
let content;
let contentData;

async function getResponce() {
  let responce = await fetch(REQUEST_URL);
  content = await responce.json();
  contentData = content.data;
  for (let key in contentData) {
    TABLE_BODY.innerHTML += `
    <tr><td class="id">${contentData[key].id}</td>
    <td class="name">${contentData[key].name}</td>
    <td class="year">${contentData[key].year}</td>
    <td class="color">${contentData[key].color}</td>
    <td class="pantone_value">${contentData[key].pantone_value}</td>
    </tr>`
  }
};

function getClassName(evt) {
  return evt.target.closest("th").className;
}

function classToString(evt) {
  return ('.' + getClassName(evt));
}

function toggleForm(evt) {
  let classItems = document.querySelectorAll(classToString(evt));
  for (let i = 0; i < classItems.length; i++) {
    classItems[i].classList.add("hidden");
  }
}

/* function getFormStatus() {
  let status = document.querySelectorAll(".main");
  for (let i = 0; i < status.length; i++) {
    if (status[i].classList.contains("hidden")) {BTN_RESET.removeAttribute("disabled")};
  }
} */

document.addEventListener("DOMContentLoaded", getResponce);
FORM.addEventListener("change", toggleForm);
