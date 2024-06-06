export const sortLeadersElements = leaders => [...leaders].sort((a, b) => a.time - b.time);

export const getTimeInSeconds = timer => timer.seconds + timer.minutes * 60;
