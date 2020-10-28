import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TinderCards from "./components/TinderCards/TinderCards";

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      {/* Swipe Button */}
    </div>
  );
}

export default App;
