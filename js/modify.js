export function modify(list) {
    document.getElementById("modify").addEventListener(
      "click",
      (event) => {
        const show = document.getElementById("show");
        let value = show.value;
        let table = document.getElementById("table");
        let lastRow = table.rows.length - 1;
        list.pop();
        list[lastRow - 1] = valor;
        table.rows[lastRow].querySelector("#rowtable").innerHTML = value;
      },
      false
    );
  }
  
  export function modifybuton(list) {
    let classIMG= [];
    classIMG = document.querySelectorAll(".ModifyIMG");
    let table = document.getElementById("table");
    let index = Array.from(classIMG).indexOf(Event.target);
    let preValue = lista[index];
    let valor = prompt("Modify: ", preValue);
    list[index] = value;
    table.rows[index + 1].querySelector("#rowtable").innerHTML = value;
  }