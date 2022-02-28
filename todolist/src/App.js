import logo from './logo.svg';
import './App.css';
// Importa meu componente List
import List from './components/List';

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

function handleAddItemToList(event) {
  event.preventDefault();
  
  setItemsList([...itemsList, text]);
  
  // Limpa o campo de input
  setTask("");
}

<input type="text" placeholder="Adicione uma tarefa" onChange={handleInputTask} value={task} />

// Verifica se tem um item para adicionar
if(task) {
  setItemsList([...itemsList, task]);
  
  // Limpa o campo de input
  setTask("");
}

/ src/components/List/index.js
import React from 'react';

function List (props) {
  return(
    <ul className="todo-list" >
      {props.itemsList.map(item => (<li>{item}</li> ))}
    </ul>
  )
}

export default List;

// src/Todo.js
return (
  <div className="todo-wrapper">
    <h1>ToDo List</h1>
    <form >
      <input type="text" onChange={handleInputText} value={text} />
      <button type="submit" onClick={addItem} >Adiciona</button>
    </form>
  
    <List itemsList={itemsList} /> {/* <--------- passando o `itemList` como props para o componente */}
  </div>
);

import React, { useState } from 'react';

function Form(props) {
  const [task, setTask] = useState("");

  function handleChangeInput(event) {
    let inputTask = event.target.value;
    
    setTask(inputTask);
  }

  function handleAddItemToList(event) {
    event.preventDefault();
    
    if(task) {
      props.handleAddItemToList(task) // <-----------
      
      setTask("");
    }
  }
  
  return (
    <form >
      <input type="text" onChange={handleChangeInput} value={task} />
      <button type="submit" onClick={handleAddItemToList}>Adiciona</button>
    </form>
  )
}

export default Form;

import React, { useState } from 'react';

import List from './components/List';
import Form from './components/Form';

function Todo() {
  const [itemsList, setItemsList] = useState([]);
  
  function handleAddItemToList(newItem) {   // <------------ 
    setItemsList([...itemsList, newItem])
  }
  
  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      
      <Form onAddItem={handleAddItemToList}/> { /* <------------ */ }

      <List itemsList={itemsList} />
    </div>
  );
}

export default Todo;