import editNameList from "./editNameList.js";

export default function createNameList(name) {

    const liElement = document.createElement("li");
    liElement.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

    liElement.append(document.createTextNode(name));

    const buttonDeleteElement = document.createElement("button");
    buttonDeleteElement.classList.add("btn", "btn-danger", "btn-sm");
    buttonDeleteElement.innerText = "Excluir";
    buttonDeleteElement.addEventListener("click", (event) => {
        event.preventDefault();

        console.log("target:", event.target);
        console.log("currentTarget:", event.currentTarget);

        event.currentTarget.parentElement.remove();
    });
    liElement.append(buttonDeleteElement);

    liElement.addEventListener("click", (event) => {

        console.log("target:", event.target);
        console.log("currentTarget:", event.currentTarget);

        // só entra em edição ao clicar no próprio li (o texto),
        // não nos botões "Excluir"/"Alterar" nem no input
        if (event.target !== event.currentTarget) {
            return;
        }

        // se já está em edição (tem input), não reinicia o modo de edição
        if (event.currentTarget.querySelector("input") !== null) {
            return;
        }

        editNameList(event.currentTarget);
    });

    return liElement;

}
