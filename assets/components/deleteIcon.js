    //? Errase trash icon when task is completed
    const deleteIcon = () => {
        const i = document.createElement("i");
        i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
        i.addEventListener("click", deleteTask);
        return i;
    };

    //? Delete a task with the trash icon 
    const deleteTask = (event) => {
        const parent = event.target.parentElement;
        parent.remove();
    };

    //? Exports the func to the main script
    export default deleteIcon;
