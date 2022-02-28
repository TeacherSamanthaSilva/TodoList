import logo from './logo.svg';
import './App.css';

function Todo() {
  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      <form >
        <input type="text" placeholder="Adicione uma tarefa" />
        <button type="submit">Adicionar</button>
      </form>

      <ul className="todo-list" >
        <li>Item</li>
      </ul>
    </div>
  );
}

export default Todo;

function handleChangeInput(event) {
  const inputTask = event.target.value;
}

<input type="text" placeholder="Adicione uma tarefa" onChange={handleChangeInput} />

import React, { useState } from 'react'; // <------ importar o useState do React

function Todo() {
	const [task, setTask] = useState(""); // <------ estado

  // ...
}

function handleChangeInput(event) {
  let inputTask = event.target.value;
  
  setTask(inputTask); // <----- atualizamos o estado "task" atraves de "setTask"
}

const [itemsList, setItemsList] = useState([]); // <----- será um Array

// Adiciona um novo elemento na lista
function handleAddItemToList(event) {
  event.preventDefault(); // <----- desabilita o refresh na pagina ao enviar um formulário
  
  setItemsList([...itemsList, task]); // <----- Copia todos os items ja existentes e entao adiociona o novo item
}

<button type="submit" onClick={handleAddItemToList}>Adicionar</button>