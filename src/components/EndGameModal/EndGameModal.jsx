/* eslint-disable no-multi-str */
import styles from "./EndGameModal.module.css";

import { Button } from "../Button/Button";

import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getTimeInSeconds } from "../../utils/helpers";
import { postLeaders } from "../../api/leaders";
import { useContext } from "react";
import { LeadersContext } from "../../context/leaderboardContext";
import { sortLeadersElements } from "../../utils/helpers";

export function EndGameModal({ isWon, gameDurationSeconds, gameDurationMinutes, onClick, pairsCount, timer }) {
  const timeLeaders = getTimeInSeconds({ minutes: gameDurationMinutes, seconds: gameDurationSeconds });

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  const [inputLeaders, setInputLeaders] = useState("");

  const { leaders } = useContext(LeadersContext);

  const sortedLeaders = sortLeadersElements(leaders);

  const leadersLength = sortedLeaders.length;
  const isLeadResult = sortedLeaders[leadersLength - 1].time > getTimeInSeconds(timer) && pairsCount === 9;

  const title = isWon ? (isLeadResult ? "Вы попали на Лидерборд!" : "Вы победили!") : "Вы проиграли!";

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const onLeaders = () => {
    const resultLeaderboard = {
      name: inputLeaders,
      time: timeLeaders,
    };

    postLeaders({ resultLeaderboard })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>
      {isLeadResult ? (
        isWon ? (
          <form
            onSubmit={e => {
              e.preventDefault();
              if (!inputLeaders.trim()) {
                setInputLeaders("Введите имя");
                return;
              }
              onLeaders();
              setInputLeaders("");
              navigate("/leaderboard");
            }}
          >
            <input
              className={styles.input}
              onChange={e => {
                setInputLeaders(e.target.value);
              }}
              value={inputLeaders.name}
              type="text"
              placeholder="Пользователь"
            />
          </form>
        ) : (
          ""
        )
      ) : (
        ""
      )}
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>

      <Button onClick={onClick}>Начать сначала</Button>
      <Link className={styles.link} to="/leaderboard">
        Перейти к лидерборду
      </Link>
      {error && error}
    </div>
  );
}
