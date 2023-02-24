// 

let listContainerElement = document.getElementById("list");

for (let i = 1; i <= 100; i++) {
  
  // creare un elemento di tag <li>
  let newElement = document.createElement('div');
  
  // stiamo attribuendo listContainerElement come GENITORE di newElement
  listContainerElement.append(newElement);
  // possiamo fare anche così
  // listContainerElement.innerHTML += "<li>Elemento " + (i + 1) + "</li>"

  // cambio il valore interno dentro l'elemento
  newElement.innerHTML = "Elemento " + (i);

  if (i % 2 == 0) {
    newElement.style.color = "red";
    newElement.classList.add("bold");
  }
}
