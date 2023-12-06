import './App.css';
import Form from './components/form/Form';
import Button from './components/button/Button';
import List from './components/list/List';
import { useState } from 'react';

const DUMMY_TODOS = [
  {
  heading: "Learn react today....",
  details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid possimus fugit.",
  done: false
},
{
  heading: "Learn tailwind today....",
  details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid possimus fugit culpa eligendi dicta quisquam temporibus itaque illum quo consectetur, assumenda rerum animi molestias maxime, recusandae magni eum voluptate dolor.",
  done: false
},
];
function App() {
  const [todos, setTodos] = useState(DUMMY_TODOS);
  const [show, setShow] = useState(null);
  const showAddFormHandler = (show) => {
    setShow(show);
  };
  const addNewTodoHandler = (todo) => {
    setTodos(prevTodos => [...prevTodos, todo])
  };
  const onDoneTodoHandler = (index) => {
    todos[index].done = true;
    console.log(todos);
  }; 
  return (
   <div className='container p-2 mx-auto sm:w-[70%] md:w-[65%] lg:w-[700px]'> 
      <Button showAddForm={showAddFormHandler}/>
      {show && <Form addNewTodo={addNewTodoHandler} />}
      <List todos={todos} onDoneTodo={onDoneTodoHandler}/>
    </div>
  )
};

export default App;
