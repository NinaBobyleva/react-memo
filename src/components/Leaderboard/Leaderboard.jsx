import styles from "./Leaderboard.module.css";
import vectorImageUrl from "./images/Vector.png";
import vectorActivImageUrl from "./images/Vector-activ.png";
import magicBallImageUrl from "./images/magic-ball.png";
import magicBallActivImageUrl from "./images/magic-ball-activ.png";
import superPowers from "./images/super-powers.png";
import hardMode from "./images/hard-mode.png";

export const Leaderboard = ({ position, user, time, achievements, color = "black" }) => {
  const achivImg = achievements[0] === 1 ? vectorActivImageUrl : vectorImageUrl;

  const achivImg2 = achievements[1] === 2 ? magicBallActivImageUrl : magicBallImageUrl;

  return (
    <>
      <li style={{ color: color }} className={styles.item}>
        <div className={styles.position}>{position}</div>
        <div className={styles.user}>{user}</div>
        <div className={styles.img}>
          <div className={achivImg === vectorActivImageUrl ? styles.wrapper : ""}>
            <div>
              <img src={achivImg} alt="#" />
            </div>
            <div className={styles.bubble}>
              <img className={styles.description} src={hardMode} alt="#" />
            </div>
          </div>
          <div className={achivImg2 === magicBallActivImageUrl ? styles.wrapper : ""}>
            <div>
              <img src={achivImg2} alt="#" />
            </div>
            <div className={styles.bubble}>
              <img className={styles.description} src={superPowers} alt="#" />
            </div>
          </div>
        </div>
        <div className={styles.time}>{time}</div>
      </li>
    </>
  );
};
