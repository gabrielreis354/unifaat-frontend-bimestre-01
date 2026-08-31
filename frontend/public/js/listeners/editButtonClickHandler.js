import saveButtonClickHandler from "./saveButtonClickHandler.js";

export default function editButtonClickHandler(event) {
    event.preventDefault();

    const buttonEditElement = event.currentTarget;
    const liElement = buttonEditElement.closest("li");

    const infoElement = liElement.querySelector("div");
    const nameElement = infoElement.querySelector("span");
    const emailElement = infoElement.querySelector("small");

    const nameInputElement = document.createElement("input");
    nameInputElement.setAttribute("type", "text");
    nameInputElement.setAttribute("name", "name");
    nameInputElement.classList.add("form-control", "form-control-sm", "mb-1");
    nameInputElement.value = nameElement.textContent;

    const emailInputElement = document.createElement("input");
    emailInputElement.setAttribute("type", "email");
    emailInputElement.setAttribute("name", "email");
    emailInputElement.classList.add("form-control", "form-control-sm");
    emailInputElement.value = emailElement.textContent;

    infoElement.innerHTML = "";
    infoElement.append(nameInputElement, emailInputElement);

    const buttonDeleteElement = liElement.querySelector(".btn-danger");
    buttonDeleteElement.classList.add("d-none");

    const buttonSaveElement = document.createElement("button");
    buttonSaveElement.classList.add("btn", "btn-success", "btn-sm");
    buttonSaveElement.innerText = "Salvar";
    buttonSaveElement.addEventListener("click", saveButtonClickHandler);

    buttonEditElement.replaceWith(buttonSaveElement);
}
