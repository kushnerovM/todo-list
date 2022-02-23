//selectors
const newTodo = document.querySelector(".new-todo");
const addTodo = document.querySelector(".add-todo");
const todoContainer = document.querySelector(".todo-container");
//event-listeners
addTodo.addEventListener("click",addToList);
todoContainer.addEventListener("click",deleteComplite);
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
    compliteButton.innerHTML="<i class='fa-solid fa-square-check'></i>";
    todoDiv.appendChild(compliteButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("del-btn");
    deleteButton.innerHTML='<i class="fa-solid fa-trash-can"></i>';
    todoDiv.appendChild(deleteButton);

    todoContainer.appendChild(todoDiv);

}
function deleteComplite(e){
    if(e.target.classList[0]=="comp-btn"){
        e.target.parentElement.classList.toggle("completed");
    }
    if(e.target.classList[0]=="del-btn"){
        e.target.parentElement.remove();
    }
}