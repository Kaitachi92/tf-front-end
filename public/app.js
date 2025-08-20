

document.addEventListener("DOMContentLoaded", async () => {

    const toDos = [
        "Estudar HTML semântico",
        "Praticar CSS básico",
        "Revisar seletores CSS",
        "Montar página com Flexbox",
        "Adicionar responsividade com media queries",
        "Estudar JavaScript básico",
        "Praticar manipulação do DOM",
        "Implementar evento de clique em botão",
        "Criar lista dinâmica com JS",
        "Estudar funções em JavaScript",
        "Aprender sobre arrays e objetos",
        "Praticar laços (for, while)",
        "Estudar fetch() e requisições HTTP",
        "Consumir API simples (ex: Pokédex)",
        "Criar mini-projeto integrando tudo"
    ];

    const buttonListAddElement = document.getElementsByClassName("btn")[0];

    const listWrapper = document.getElementById("list-wrapper");
    const inputElement = document.getElementById("list-add");

    // Função para renderizar a lista de tarefas
    function renderList() {
        // Limpa o conteúdo anterior
        listWrapper.innerHTML = "";
        const ul = document.createElement("ul");
        toDos.forEach((todo, idx) => {
            const li = document.createElement("li");
            li.textContent = todo;

            // Botão deletar
            const btnDelete = document.createElement("button");
            btnDelete.textContent = "deletar";
            btnDelete.style.marginLeft = "8px";
            btnDelete.addEventListener("click", () => {
                toDos.splice(idx, 1);
                renderList();
            });
            li.appendChild(btnDelete);
            ul.appendChild(li);
        });
        listWrapper.appendChild(ul);
    }

    // Renderiza a lista inicial
    renderList();

    buttonListAddElement.addEventListener("click", (event) => {
        event.preventDefault();
        const value = inputElement.value.trim();
        if (value) {
            toDos.push(value);
            inputElement.value = "";
            renderList();
        }
    });

});