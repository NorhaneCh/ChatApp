import { createContext, useCallback, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerInfo, setRegisterInof] = useState({
    name: "",
    email: "",
    password: "",
  });
  //to optimize the function and it won't be called evey render
  const updateRegisterInfo = useCallback((info) => {
    setRegisterInof(info);
  });

  return (
    <AuthContext.Provider value={{ user, registerInfo, updateRegisterInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
