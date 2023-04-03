
    //* Cambia el stilo e indica que la tarea se hizo
    const checkComplete = () => {
        const i = document.createElement("i");
        i.classList.add('far', 'fa-check-square', 'icon');
        i.addEventListener("click", completeTask);
        return i;
    };


    //? Inmediatly invoked functtin expression IIFE
    const completeTask = (event) => { //funciones que en cuanto se delcaran se ejecutan 
        const element = event.target
        element.classList.toggle("fas"); // si la clase no existe toggle la quita o pone
        element.classList.toggle("completeIcon");
        element.classList.toggle("far"); 
    };

    //? Exports the func to the main script
    export default checkComplete;