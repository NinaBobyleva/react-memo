import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./Leaderboard.module.css";

export const Leaderboard = () => {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <h3 className={styles.title}>Лидерборд</h3>
          <Link to="/">
            <Button>Начать игру</Button>
          </Link>
        </header>
        <main>
          <div className={styles.box}>
            <p className={styles.subtitle1}>Позиция</p>
            <p className={styles.subtitle2}>Пользователь</p>
            <p></p>
            <p className={styles.subtitle4}>Время</p>
          </div>
          <div className={styles.box}>
            <p className={styles.subtitle1}></p>
            <p className={styles.subtitle2}></p>
            <p></p>
            <p className={styles.subtitle4}></p>
          </div>
        </main>
      </div>
    </>
  );
};
