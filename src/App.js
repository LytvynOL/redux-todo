import { useState } from "react";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import Button from "./components/But/ButtonDelAll";
import Modal from "./components/Modal/modal";

function App() {
  const [todos, setTodo] = useState([]);
  const [activeModal, setActiveModal] = useState(false);

  const handlerTodo = function (text) {
    const newTodo = {
      text: text,
      completed: false,
      id: text.length + Math.random(100),
    };

    setTodo([...todos, newTodo]);
  };

  const finishTodo = todos.filter((el) => el.completed).length;
  console.log(finishTodo);

  const toggleTodo = function (todoId) {
    setTodo(
      todos.map((todo) => {
        if (todo.id == todoId) return { ...todo, completed: !todo.completed };
        return {
          ...todo,
        };
      })
    );
  };

  const deleteAll = function () {
    setTodo([]);
  };

  const deleteAllTodo = function (todos) {
    setTodo(todos.filter((todo) => !todo.completed));
  };

  const activsModal = function () {
    setActiveModal(true);
  };

  return (
    <div className="App">
      <Modal
        active={activeModal}
        setActive={setActiveModal}
        deleteAll={deleteAll}
      />
      <h1>Todo List</h1>
      <TodoForm addTodo={handlerTodo} finishTodo={finishTodo} />
      {todos.length < 1 ? (
        " "
      ) : (
        <Button
          deleteAllTodo={deleteAllTodo}
          todo={todos}
          finishTodo={finishTodo}
          activsModal={activsModal}
        />
      )}

      <TodoList todo={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
