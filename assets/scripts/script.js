const btn = document.querySelector("[data-form-btn]");
console.log(btn);

//* Captura y agrega lo ingresado en el campo input
const createTask = (evento) => { //* arrow func o func anonima */
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]")
    const task = document.createElement("li"); //^crea el elm <li>
    task.classList.add("card"); //^ adds css class
    input.value = ""; //^ limpia el input
    //* Bacticks for adding html content to show
    const content = 
    `<div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content; //^add html content

    //* Add task to te li element
    list.appendChild(task   );
    console.log(content);
}
console.log(btn);
//* Listener
btn.addEventListener("click", createTask); //* Metódo qué genera un listener



