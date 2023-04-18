import { IoIosTrash, IoMdRefresh } from "react-icons/io";
import styles from "./ButtonDelAll.module.css";

const Button = function ({ deleteAllTodo, todo, finishTodo, activsModal }) {
  return (
    <div className={styles.buttons}>
      <button className={styles.button} onClick={() => deleteAllTodo(todo)}>
        <IoIosTrash className={styles.icon} />
      </button>
      <button className={styles.button} onClick={() => activsModal(true)}>
        <IoMdRefresh className={styles.icon} />
      </button>
      <div className={styles.count}>
        <span>{finishTodo}</span>
      </div>
    </div>
  );
};

export default Button;
