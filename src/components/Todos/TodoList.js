import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todo, toggleTodo }) {
  return (
    <div className={styles.todoListStyle}>
      {todo.length === 0 && <h2>Список задач пуст</h2>}
      {todo.map((todo) => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
}

export default TodoList;
