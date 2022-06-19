import { useContext } from "react";
import { UserContext } from "./context/user.context";

import menuIcon from "./img/menu.svg";
import searchIcon from "./img/search.svg";

const App = () => {
  const { user } = useContext(UserContext);

  if (user === null) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="container">
        <div className="background-stylish-color"></div>

        <div className="heading">
          <div className="icons">
            <img src={menuIcon} alt="menu" />
            <img src={searchIcon} alt="search" />
          </div>

          <nav>
            <div className="navigation">
              <p>Home</p>
              <div className="underline"></div>
            </div>
            <div className="navigation">
              <p>About</p>
              <div className="underline"></div>
            </div>
            <div className="navigation">
              <p>Portfolio</p>
              <div className="underline"></div>
            </div>
          </nav>
        </div>

        <section>
          <div className="img-side">
            {/* <div className="img"></div> */}
            <img src={user.picture.large} alt={user.name.first} />
          </div>
          <div className="content">
            <p className="sub-title">{user.nat}</p>
            <h1>
              {user.name.title} {user.name.first} {user.name.last}
            </h1>

            <div className="details">
              <p>Gender: {user.gender}</p>
              <p>E-Mail: {user.email}</p>
              <p>
                Address: {user.location.state}, {user.location.city}
              </p>
            </div>

            <div className="news-letter">
              <input type="text" placeholder="youremail@gmail.com" />
              <button>Subscribe</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default App;
