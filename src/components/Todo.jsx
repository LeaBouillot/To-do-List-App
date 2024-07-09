import React from "react";
import todo_icon from "../assets/todo_icon.png";

const Todo = () => {
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="todo icon" />
        <h1 className="text-3xl font font-semibold">To Do List</h1>
      </div>
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr_2 placeholder:text-slate-600"
          type="text"
          placeholder="Ajouter votre tâche"
        />
        <button>ADD + </button>
      </div>
    </div>
  );
};

export default Todo;
