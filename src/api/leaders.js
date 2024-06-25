const leadersURL = "https://wedev-api.sky.pro/api/v2/leaderboard";

export const getLeaders = () => {
  return fetch(leadersURL, {
    method: "GET",
  }).then(response => {
    if (!response.ok) {
      throw new Error("Ошибка сервера");
    }

    if (response.status === 400) {
      throw new Error("Полученные данные не в формате JSON!");
    }
    return response.json();
  });
};

export const postLeaders = ({ resultLeaderboard }) => {
  return fetch(leadersURL, {
    method: "POST",
    body: JSON.stringify(resultLeaderboard),
  }).then(response => {
    if (!response.ok) {
      throw new Error("Ошибка сервера");
    }

    if (response.status === 400) {
      throw new Error("Полученные данные не в формате JSON!");
    }
    return response.json();
  });
};
