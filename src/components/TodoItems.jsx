import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img src={tick} alt="tick" className="w-7" />
        <p className="text-slate-700 ml-4 text-[17px]">{text}</p>
      </div>
      <img
        onClick={() => {
          deleteTodo(id); //(id) tres important pour trouver deleteTodo
        }}
        src={delete_icon}
        alt="delete_icon"
        className="w-3.5 cursor-pointer"
      />
    </div>
  );
};

export default TodoItems;
