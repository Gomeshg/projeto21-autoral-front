import { useContext, useState, createContext, useEffect } from "react";

export const AuthContext = createContext({});

export function AuthProvider(props) {
  const [session, setSession] = useState({});

  useEffect(() => {
    const userStorage = localStorage.getItem("session");
    if (userStorage) {
      setSession(JSON.parse(userStorage));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        setSession,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export const useSession = () => useContext(AuthContext);
