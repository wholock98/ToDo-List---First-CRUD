import { modifybuton } from "/js/modify.js";
import { Delete } from "/js/delete.js";

function createTable(list) {
  let thead = document.createElement("thead");
  thead.setAttribute("id", "headtable");
  tabla.appendChild(thead);
  let th = document.createElement("tr");
  let celdath = document.createElement("td");
  celdath.textContent = "ToDo";
  let celdath2 = document.createElement("td");
  celdath2.textContent = "Options";
  th.appendChild(celdath);
  th.appendChild(celdath2);
  thead.appendChild(th);
  let tbody = document.createElement("tbody");
  tbody.setAttribute("id", "bodytable");
  table.appendChild(tbody);
  for (let i = 0; i <= list.length - 1; i++) {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    let cell = document.createElement("td");
    cell.setAttribute("id", "celltable");
    cell.textContent = list[i];
    tr.appendChild(cell);
    let cell2 = document.createElement("td");
    let image2 = document.createElement("img");
    image2.setAttribute("src", "images/modify.png");
    image2.setAttribute("class", "imagemodify");
    image2.setAttribute("id", "imagemodify");
    image2.addEventListener("click", function (event) {
      modifybuton(list);
    });
    cell2.appendChild(image2);
    let image3 = document.createElement("img");
    image3.setAttribute("src", "images/delete.png");
    image3.setAttribute("class", "imagedelete");
    image3.setAttribute("id", "imagedelete");
    image3.addEventListener("click", function (event) {
      Delete(list);
    });
    cell2.appendChild(image3);
    tr.appendChild(cell2);
  }

  document.getElementById("show container").appendChild(table);
}

function deleteTable() {
  let deleteTable = document.querySelector("#bodytable");
  let deleteHead = document.querySelector("#headtable");
    deleteTable.remove();
    deleteHead.remove();
}

export function showtable(list) {
  let table = document.getElementById("table");
  if (table.rows.length > 0) {
    deleteTable();
    createTable(list);
  } else {
    createTable(list);
  }
}