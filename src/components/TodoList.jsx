import React, { useState } from 'react';
import Form from './Form';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import Edit from './Edit';

const TodoList = () => {
  const [todoValue, setTodo] = useState([]);

  const createTodo = todo => {
    setTodo([...todoValue, { id: uuidv4(), task: todo, isEditing: false }]);
  };

  const deleteTodo = id => {
    setTodo(todoValue.filter(todo => todo.id !== id))
  }

  const editTodo = id => {
    setTodo(todoValue.map(todo => todo.id === id ?{...todo,
    isEditing:!todo.isEditing}: todo))
  }

  const editTask = (task, id) => {
    setTodo(todoValue.map(todo => todo.id === id? {...todo, task, isEditing: !todo.isEditing} : todo))
  }

  return (
    <div className='container flex items-center justify-center h-screen bg-gray-900'>
      <div className='bg-gray-700 p-8 rounded-md w-full max-w-md'>
        <h1 className='font-bold text-4xl text-white mb-8 text-center'>TODO LIST APP</h1>
        <Form createTodo={createTodo} />
        {todoValue.map((todo, idx) => (
          todo.isEditing ? (
            <Edit key={idx} editTodo={editTask} task={todo}/>
          ) : (
            <Todo task={todo} key={idx} deleteTodo={deleteTodo} editTodo={editTodo}/>
          )
        ))}
      </div>
    </div>
  );
};

export default TodoList;
