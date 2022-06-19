import { createContext, useState, useEffect } from "react";

import nishan from "../img/nishan.png";
import puja from "../img/puja.png";
import sangita from "../img/sangita.png";

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
   * delay rakheko. 3 seconds ko delay xa. + TROLL        *
   *******************************************************/
  useEffect(() => {
    try {
      const person = ["puja", "", "nishan", "", "sangita"];

      const random = Math.floor(Math.random() * person.length);

      setTimeout(() => {
        if (person[random] === "") {
          fetch(URL)
            .then((res) => res.json())
            .then((user) => setUser(user.results[0]));
        }

        if (person[random] === "puja") {
          const pujaObj = {
            name: {
              title: "Miss",
              first: "Puja",
              last: "Hashtag",
            },
            gender: "Female",
            email: "puja.hashtag@gmail.com",
            nat: "NP",
            location: {
              state: "Bagmati",
              city: "Bhaktapur",
            },
            picture: {
              large: puja,
            },
          };
          setUser(pujaObj);
        }

        if (person[random] === "nishan") {
          const nishanObj = {
            name: {
              title: "Mr",
              first: "Savyata",
              last: "Ko Buda Mah",
            },
            gender: "Male",
            email: "ilove.savyata@gmail.com",
            nat: "NP",
            location: {
              state: "Bagmati",
              city: "Bhaktapur",
            },
            picture: {
              large: nishan,
            },
          };
          setUser(nishanObj);
        }

        if (person[random] === "sangita") {
          const sangitaObj = {
            name: {
              title: "Miss",
              first: "Pudki",
              last: "1.6",
            },
            gender: "Female",
            email: "pudki.ketimah@gmail.com",
            nat: "NP",
            location: {
              state: "Bagmati",
              city: "Bhaktapur",
            },
            picture: {
              large: sangita,
            },
          };
          setUser(sangitaObj);
        }
      }, 3000);
    } catch (error) {}
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
