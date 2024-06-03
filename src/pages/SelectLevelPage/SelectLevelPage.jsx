import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useContext, useEffect } from "react";
import { EasyModeContext } from "../../context/easymodeContext";

export function SelectLevelPage() {
  const { setEasymode } = useContext(EasyModeContext);

  const checkbox = () => {
    setEasymode(true);
  };

  useEffect(() => {
    setEasymode(false);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/3">
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/6">
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/9">
              3
            </Link>
          </li>
        </ul>
        <div className={styles.wrap}>
          <h3 className={styles.subtitle}>Дополнительные попытки</h3>
          <input onClick={checkbox} type="checkbox" />
        </div>
      </div>
    </div>
  );
}
