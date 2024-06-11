import styles from "./Leaderboard.module.css";
import vectorImageUrl from "./images/Vector.png";
import vectorActivImageUrl from "./images/Vector-activ.png";
import magicBallImageUrl from "./images/magic-ball.png";
import magicBallActivImageUrl from "./images/magic-ball-activ.png";

export const Leaderboard = ({ position, user, time, achievements, color = "black" }) => {
  console.log(achievements);

  const achivImg = achievements[0] === 1 ? vectorActivImageUrl : vectorImageUrl;

  const achivImg2 = achievements[1] === 2 ? magicBallActivImageUrl : magicBallImageUrl;

  return (
    <>
      <li style={{ color: color }} className={styles.item}>
        <div className={styles.position}>{position}</div>
        <div className={styles.user}>{user}</div>
        <div className={styles.img}>
          <img src={achivImg} alt="" />
          <img src={achivImg2} alt="" />
        </div>
        <div className={styles.time}>{time}</div>
      </li>
    </>
  );
};
