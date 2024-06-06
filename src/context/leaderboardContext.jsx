import { createContext, useState } from "react";
import { useEffect } from "react";
import { getLeaders } from "../api/leaders";
import { sortLeadersElements } from "../utils/helpers";

export const LeadersContext = createContext(null);

export const LeadersProvider = ({ children }) => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    getLeaders().then(leaders => {
      const sortedLeaders = sortLeadersElements(leaders.leaders);
      setLeaders(sortedLeaders.splice(1, 10));
    });
  }, []);

  return <LeadersContext.Provider value={{ leaders, setLeaders }}>{children}</LeadersContext.Provider>;
};
