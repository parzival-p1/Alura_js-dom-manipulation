const btn = document.querySelector("[data-form-btn]");
console.log(btn);

//* Captura y agrega lo ingresado en el campo input
const createTask = (evento) => { //* arrow func o func anonima */
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}
//* Listener
btn.addEventListener("click", createTask); //* Metódo qué genera un listener



