export default function editNameList(liElement) {

    const buttonDeleteElement = liElement.querySelector("button");
    const currentValue = liElement.firstChild.textContent;

    // remove o texto atual e esconde o botão "Excluir" enquanto edita
    liElement.firstChild.remove();
    buttonDeleteElement.classList.add("d-none");

    // input já preenchido com o valor atual
    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.classList.add("form-control", "form-control-sm", "me-2");
    inputElement.value = currentValue;

    // botão "Alterar"
    const buttonEditElement = document.createElement("button");
    buttonEditElement.classList.add("btn", "btn-success", "btn-sm", "me-2");
    buttonEditElement.innerText = "Alterar";

    liElement.prepend(buttonEditElement);
    liElement.prepend(inputElement);

    const confirmEdit = () => {
        const newValue = inputElement.value.trim();

        // não salva valor vazio: mantém o modo de edição com o valor anterior
        if (newValue === "") {
            return;
        }

        // volta ao modo normal: texto simples + botão "Excluir"
        inputElement.remove();
        buttonEditElement.remove();
        liElement.prepend(document.createTextNode(newValue));
        buttonDeleteElement.classList.remove("d-none");
    };

    buttonEditElement.addEventListener("click", (event) => {
        event.preventDefault();

        console.log("target:", event.target);
        console.log("currentTarget:", event.currentTarget);

        confirmEdit();
    });

    // desafio: Enter com foco no input também confirma
    inputElement.addEventListener("keypress", (event) => {
        if (event.key !== "Enter") {
            return;
        }
        event.preventDefault();

        confirmEdit();
    });

}
