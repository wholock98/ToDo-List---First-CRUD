export function show(list) {
    const show = document.getElementById("show");
    let longitudArray = Object.keys(list).length;
    let collectValue = list[lengthArray - 1];
    show.value = collectValue;
  }