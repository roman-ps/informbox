'use strict';

const REQUEST_URL = 'https://api.mocki.io/v1/3442f47c';
const TABLE_BODY = document.querySelector(".table__body");
const FORM = document.querySelector(".main-form");
const BTN_RESET = document.querySelector(".reset");
let content;
let contentData;
let dataJSON = [];

async function getResponce() {
  let responce = await fetch(REQUEST_URL);
  content = await responce.json();
  contentData = content.data;
  toLocalStorage(contentData)
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

function toLocalStorage(content) {
  dataJSON = JSON.stringify(content);
  localStorage.setItem("data", dataJSON);
}

function fromLocalStorage() {
  return JSON.parse(localStorage.getItem("data"));
}

function getClassName(evt) {
  return evt.target.closest("th").className;
}

function classToString(evt) {
  return `.${getClassName(evt)}`;
}

function toggleForm(evt) {
  let classItems = document.querySelectorAll(classToString(evt));
  for (let i = 0; i < classItems.length; i++) {
    classItems[i].classList.add("hidden");
  }
  getFormStatus();
}

function getFormStatus() {
  let status = document.querySelectorAll("th");
  for (let i = 0; i < status.length; i++) {
    if (status[i].classList.contains("hidden")) BTN_RESET.removeAttribute("disabled");
  }
}

function reset() {
  let items = document.querySelectorAll("hidden");
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("hidden");
  }
}

document.addEventListener("DOMContentLoaded", getResponce);
FORM.addEventListener("change", toggleForm);
BTN_RESET.addEventListener("click", reset);
