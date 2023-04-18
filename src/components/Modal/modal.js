import Styles from "./modal.module.css";

const Modal = function ({ active, setActive, deleteAll }) {
  const deleteAllAndClose = function () {
    deleteAll();
    setActive(false);
  };

  return (
    <div
      className={active ? Styles.globalModal_active : Styles.globalModal}
      onClick={() => setActive(false)}
    >
      <div className={Styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={Styles.close}>
          <button className={Styles.but} onClick={() => setActive(false)}>
            X
          </button>
        </div>
        <div className={Styles.modal__text}>
          <h3>Вы хотите удалить все задачи?</h3>
        </div>

        <div className={Styles.modal__button}>
          <button className={Styles.button} onClick={deleteAllAndClose}>
            Удалить
          </button>
          <button className={Styles.button} onClick={() => setActive(false)}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
