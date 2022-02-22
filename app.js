//selectors
const newTodo = document.querySelector(".new-todo");
const addTodo = document.querySelector(".add-todo");
const todoContainer = document.querySelector(".todo-container");
//event-listeners
addTodo.addEventListener("click",addToList);
//functions
function addToList(event){
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const todoText = document.createElement("li");
    todoText.classList.add("todoText");
    todoText.innerText=newTodo.value;
    newTodo.value="";
    todoDiv.appendChild(todoText);

    const compliteButton = document.createElement("button");
    compliteButton.classList.add("comp-btn");
    compliteButton.innerHTML="<i>V</i>";
    todoDiv.appendChild(compliteButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("del-btn");
    deleteButton.innerHTML="<i>X</i>";
    todoDiv.appendChild(deleteButton);

    todoContainer.appendChild(todoDiv);

}