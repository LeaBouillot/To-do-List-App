import React, { useRef } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";
import { useState } from "react";
import { useEffect } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  // referance de input
  const inputRef = useRef();
  //  inputText à lier au button ADD : button onClick={add}
  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    // ajouter newtodo sur la list previous
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prvTodos) => {
      return prvTodos.filter((todo) => todo.id !== id);
    });
  };
  //  toggle todo complete or incomplete
  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  //  useEffect(() => {},[])
  useEffect(() => {}, [todoList]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="todo icon" />
        <h1 className="text-3xl font font-semibold">To Do List</h1>
      </div>
      {/* Input box */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr_2 placeholder:text-slate-600"
          type="text"
          placeholder="Ajouter votre tâche"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ADD +{" "}
        </button>
      </div>
      {/* todo list */}
      <div>
        {todoList.map((item, index) => {
          return (
            // les element sont dans l'obget de newTodo
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo} //props que on mettra à img delete dans le ficher de TodoItems
              toggle={toggle} //props que on mettra à img tick dans le ficher de TodoItems
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
