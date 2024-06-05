import styles from "./Leaderboard.module.css";
// import { useContext } from "react";
// import { LeadersContext } from "../../context/leaderboard";

export const Leaderboard = ({ position, user, time, color = "black" }) => {
  // const { leaders } = useContext(LeadersContext);
  // console.log(leaders);

  // const leader = leaders.leaders.find((el, index) => el.id === index);

  return (
    <>
      <li style={{ color: color }} className={styles.item}>
        <span className={styles.position}>{position}</span>
        <span className={styles.user}>{user}</span>
        <span className={styles.time}></span>
        <span className={styles.time}>{time}</span>
      </li>
    </>
  );
};
