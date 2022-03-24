import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import LoginScreen from "./LoginScreen";
import RestaurantContainer from "./RestaurantContainer";
import NavBar from "./NavBar";
import Favorites from "./Favorites";

function App() {
  const [page, setPage] = useState("/");

  function getCurrentPage() {
    switch (page) {
      case "/":
        return <LoginScreen />;
      case "/restaurants":
        return <RestaurantContainer />;
      case "/favorites":
        return <Favorites />;
      default:
        return <h1>404 not found</h1>;
    }
  }

  return (
    <div className="App">
      <NavBar onChangePage={setPage} />
      {getCurrentPage()}
    </div>
  );
}

export default App;
