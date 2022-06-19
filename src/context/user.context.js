import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const URL = "https://randomuser.me/api/";

  //This is the code for no delay hai guys

  //   useEffect(() => {
  //     try {
  //       fetch(URL)
  //         .then((res) => res.json())
  //         .then((user) => setUser(user.results[0]));
  //     } catch (error) {}
  //   }, []);

  /********************************************************
   * Yo code chai loading ramrari dekhauna ko lagi thorai *
   * delay rakheko. 3 seconds ko delay xa.                *
   *******************************************************/
  useEffect(() => {
    try {
      setTimeout(() => {
        fetch(URL)
          .then((res) => res.json())
          .then((user) => setUser(user.results[0]));
      }, 3000);
    } catch (error) {}
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
