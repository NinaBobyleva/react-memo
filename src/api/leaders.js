const leadersURL = "https://wedev-api.sky.pro/api/leaderboard";

export const getLeaders = () => {
  return fetch(leadersURL, {
    method: "GET",
  }).then(response => {
    return response.json();
  });
};

export const postLeaders = ({ resultLeaderboard }) => {
  return fetch(leadersURL, {
    method: "POST",
    body: JSON.stringify(resultLeaderboard),
  }).then(response => {
    return response.json();
  });
};
