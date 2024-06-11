import styles from "./Leaderboard.module.css";
import vectorImageUrl from "./images/Vector.png";
import vectorActivImageUrl from "./images/Vector-activ.png";
import magicBallImageUrl from "./images/magic-ball.png";
import magicBallActivImageUrl from "./images/magic-ball-activ.png";

export const Leaderboard = ({ position, user, time, achievements, color = "black" }) => {
  console.log(achievements);

  const achivImg = achievements === 1 ? vectorActivImageUrl : vectorImageUrl;

  const achivImgAlt = achievements === 1 ? "activ" : "noactiv";

  const achivImg2 = achievements === 2 ? magicBallActivImageUrl : magicBallImageUrl;

  const achivImgAlt2 = achievements === 2 ? "activ" : "noactiv";

  return (
    <>
      <li style={{ color: color }} className={styles.item}>
        <div className={styles.position}>{position}</div>
        <div className={styles.user}>{user}</div>
        <div className={styles.img}>
          <img src={achivImg} alt={achivImgAlt} />
          <img src={achivImg2} alt={achivImgAlt2} />
        </div>
        <div className={styles.time}>{time}</div>
      </li>
    </>
  );
};
