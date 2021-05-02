"use strict";


const alerts = document.querySelector(".alert");
const display = document.querySelector(".display");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const clear = document.querySelector(".clear");

let editElement;
let editFlag = false;
let editId = "";

class build {
  constructor(display, clear) {
    this.display = display;
    this.clear = clear;
  }

  static displayIt(value) {
    let element = document.createElement("li");
    element.innerHTML = `<span>${value}</span>
        <div class="wrap"><button class="edit"><i class="fas fa-thumbtack"></i></button><button class="remove"><i class="fas fa-trash-alt"></i></button></div>`;
    const deletes = element.querySelector(".remove");
    const edit = element.querySelector(".edit");
    deletes.addEventListener("click", function () {
      this.closest("li").remove();
      visible("you have removed an item", "red");
      remove();
    });
    edit.addEventListener("click", function () {
      editElement = edit.parentElement.previousElementSibling;
      input.value = editElement.innerHTML;
      editFlag = true;
      display.textContent = "edit";
    });
    ul.append(element);
    visible("you have added an item", "green");
    backToNormal();
    remove();
  }

  appendOnPage() {
    this.display.addEventListener("click", () => {
      let value = input.value;
      if (value && !editFlag) {
        build.displayIt(value);
        this.clear.addEventListener("click", function () {
          [...ul.children].forEach((item) => {
            item.remove();
          });
          visible("you have cleared the list", "red");
          remove();
        });
      } else if (value && editFlag) {
        editElement.innerHTML = input.value;
        backToNormal();
        visible('item have been edited','green');
      } else {
        visible("plz enter a word", "red");
      }
    });
  }
}

let builder = new build(display, clear);

builder.appendOnPage();

function visible(string, color) {
  alerts.textContent = string;
  alerts.classList.add(`alert-${color}`);
  alerts.style.visibility = "visible";
  setTimeout(() => {
    alerts.textContent = ".";
    alerts.classList.remove(`alert-${color}`);
    alerts.style.visibility = "hidden";
  }, 1000);
}

function backToNormal() {
  input.value = "";
  editFlag = false;
  display.textContent = "submit";
}


function remove() {
  if (ul.childElementCount === 0) {
    clear.classList.remove("show");
  } else {
    clear.classList.add("show");
  }
}

