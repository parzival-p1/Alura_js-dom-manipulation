    import checkComplete from "../components/checkComplete.js";
    import deleteIcon from "../components/deleteIcon.js";

    const btn = document.querySelector("[data-form-btn]");

    //* Captura y agrega lo ingresado en el campo input
    const createTask = (evento) => 
    { //* arrow func o func anonima */
        evento.preventDefault();
        const input = document.querySelector("[data-form-input]");
        const value = input.value;
        const list  = document.querySelector("[data-list]")
        const task  = document.createElement("li"); //^crea el elm <li>
        task.classList.add("card"); //^ adds css class
        input.value = ""; //^ limpia el input
        //* Bacticks for adding html content to show

        //* Crea un elm div
        const taskContent = document.createElement("div");

        const  titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask); //agregando el elm al parent
        //task.innerHTML = content; //^add html content

        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
        //* Add task to te li element
        list.appendChild(task);
    }

    //* Listener
    btn.addEventListener("click", createTask); //* Metódo qué genera un listener

