import styles from "./Todo.module.css";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../store/action-todo";
import { IoMdDisc, IoMdClose, IoMdCheckmark } from "react-icons/io";

function Todo({ todo, toggleTodo }) {
  const set = () => toggleTodo(todo.id);
  const dispatch = useDispatch(deleteTodo);
  return (
    <div className={todo.completed ? styles.todoCompleted : styles.todo}>
      <IoMdDisc className={styles.icon} />
      <div className={styles.todoText}>{todo.text}</div>
      <IoMdClose className={styles.icon__close} onClick={dispatch(todo.id)} />
      <IoMdCheckmark className={styles.icon__done} onClick={set} />
    </div>
  );
}

export default Todo;
