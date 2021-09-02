import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [OrdenId, setOrdenId] = useState(null);
  const [UserInfo, setUserInfo] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  return (
    <UserContext.Provider
      value={{ OrdenId, setOrdenId, UserInfo, setUserInfo }}
    >
      {children}
    </UserContext.Provider>
  );
}
