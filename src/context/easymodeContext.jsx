import { createContext, useState } from "react";

export const EasyModeContext = createContext(null);

export const EasyModeProvider = ({ children }) => {
  const [easyMode, setEasymode] = useState(false);

  return <EasyModeContext.Provider value={{ easyMode, setEasymode }}>{children}</EasyModeContext.Provider>;
};
