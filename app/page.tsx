"use client";
  // More posts...

import { useState } from "react";
import TodoForm from "./components/TodoForm";

export default function Home() {
  const [todoForm, setTodoForm] = useState(false);

  const handleAdd = () => {
    console.log("Item adicionado!");
    setTodoForm(false);
  };

  return (
    <div className="w-3/5 h-screen flex flex-col items-center justify-start">
      <section className="w-full flex justify-center">
        <div className="w-full my-16 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Todo app</h1>
          
          {/* create-todo */}
          <div className="relative">
            <button 
            onClick={() => todoForm ? setTodoForm(false) : setTodoForm(true)}
            className="bg-black text-white p-2.5 font-bold cursor-pointer relative z-1 hover:bg-blue-600 transition-all duration-400"
            >
              Create todo
            </button>
            <div className="w-full h-full bg-transparent border-3 border-black p-2.5 font-bold absolute top-1 left-1 z-0 hover:border-blue-600 transition-all duration-400"></div>
          </div>

        </div>
      </section>
      <TodoForm 
        isOpen={todoForm}
        onClose={() => setTodoForm(false)}
        onAdd={handleAdd}
      />
      {/* todo list */}
      <section className="min-w-3/5 flex justify-center">
        <div className="w-auto max-w-3x1 bg-white text-black p-2.5 font-bold border-3 flex items-start gap-2">
            <input type="checkbox" className="w-5 h-5 cursor-pointer" />
            <div>
              <p> inventore corporis ullam iusto facilis. Enim, totam officia.</p>
              <div className="flex justify-end gap-2">
                <button>delete</button>
                <button>edit</button>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
