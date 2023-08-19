export function Delete(list) {
    let classIMG = [];
    classIMG = document.querySelectorAll(".DeleteImage");
    let table = document.getElementById("table");
    let index = Array.from(classIMG).indexOf(Event.target);
    table.rows[index + 1].querySelector("#rowtable").innerHTML = "";
    list.pop(index);  
    table.rows[index + 1].remove();
    }