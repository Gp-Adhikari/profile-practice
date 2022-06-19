import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const URL = "https://randomuser.me/api/";

  useEffect(() => {
    try {
      fetch(URL)
        .then((res) => res.json())
        .then((user) => setUser(user.results[0]));
    } catch (error) {}
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
