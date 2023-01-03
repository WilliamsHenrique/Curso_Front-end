let tarefa = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa() {
let valorInput = input.value;

if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    ++tarefa;

    let novoItem = `<ul id="${tarefa}" class="item">
        <li onclick="marcarTarefa(${tarefa})" class="item-icone">
            <i id="icone_${tarefa}" class="tarefa-nova"></i>
        </li>
        <li onclick="marcarTarefa(${tarefa})" class="item-nome">
            ${valorInput}
        </li>
    </ul>`;

    main.innerHTML += novoItem;

    input.value = "";
    input.focus();
}
}


function marcarTarefa(id) {
var item = document.getElementById(id);
var classe = item.getAttribute("class");
console.log(classe);

if (classe == "item") {
    item.classList.add("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.add("click");

    item.parentNode.appendChild(item);
} else {

    var icone = document.getElementById("icone_" + id);
    icone.classList.add("tarefa-nova");
}
}

input.addEventListener("keyup", function (event) {
if (event.keyCode === 13) {
    event.preventDefault();
    btnAdd.click();
}
});
