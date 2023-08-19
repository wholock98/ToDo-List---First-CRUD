import { show } from "/js/show.js";
import { showtable } from "/js/tables.js";
import { modify } from "/js/modify.js";

export function add(list) {
  document.addEventListener(
    "keydown",
    (event) => {
      const add = document.getElementById("add");
      let keyValue = event.key;

      if (keyValue == "Enter") {
        let value = addElement.value;
        list.push(value);
        show(list);
        showtable(list);
        modify(list);
        
      }
    },
    false
  );
  return list;
}