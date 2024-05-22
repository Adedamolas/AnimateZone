import { useState } from "react";
import "./App.css";
import Discover from "./pages/discover/Discover";
import Footer from "./components/footer/Footer";

import Navbar from "./Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppContext } from "./helper/Context";
import MealMaker from "./pages/make_meal/MealMaker";

function App() {
  const [theme, setTheme] = useState(false);
  const [burgerData, setBurgerData] = useState([]);
  const [countData, setCountData] = useState([
    {
      id: 1,
      image: "../../assets/cutlet.svg",
      name: "Cutlet",
      bg: "red",
      size: "medium",
      count: 0,
    },
    {
      id: 2,
      image: "./assets/mayo.svg",
      name: "Mayo",
      bg: "red",
      count: 0,
    },
    {
      id: 3,
      image: "./assets/onion.svg",
      name: "Onion",
      bg: "red",
      size: "medium",
      count: 0,
    },
    {
      id: 4,
      image: "./assets/tomatoe.svg",
      name: "Tomatoe",
      bg: "red",
      size: "medium",
      count: 0,
    },
    {
      id: 5,
      image: "./assets/cucumber.svg",
      name: "Cucumber",
      bg: "red",
      size: "medium",
      count: 0,
    },
    {
      id: 6,
      image: "./assets/cheese.svg",
      name: "Cheese",
      bg: "red",
      size: "medium",
      count: 0,
    },
    {
      id: 7,
      image: "./assets/salad.svg",
      name: "Salad",
      bg: "red",
      size: "medium",
      count: 0,
    },
    {
      id: 8,
      image: "./assets/bun_middle.svg",
      name: "Bun",
      bg: "red",
      size: "medium",
      count: 0,
    },
  ]);
  const [modal, setModal] = useState(false);
  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <AppContext.Provider
      value={{
        burgerData,
        setBurgerData,
        countData,
        setCountData,
        modal,
        setModal,
      }}
    >
      <section
        className={
          theme
            ? `bg-black text-white flex flex-col justify-between h-[100%]`
            : `bg-white flex flex-col justify-between h-[100vh]`
        }
      >
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Router>
          <Routes>
            <Route path="/" element={<Discover theme={theme} />} />
            <Route
              path="/make"
              element={<MealMaker modal={modal} theme={theme} />}
            />
          </Routes>
        </Router>
        <Footer />
      </section>
    </AppContext.Provider>
  );
}

export default App;
