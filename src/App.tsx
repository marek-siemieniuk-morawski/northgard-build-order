import React from "react";
import "./App.css";
import Timeline from "./components/timeline/Timeline";

function App() {
  return (
    <div className="App">
      <header aria-label="header">
        <button className="header-clan">Clan</button>
      </header>
      <aside aria-label="sidebar">
        <div className="aside-tab">
          <button className="aside-tablink">1</button>
          <button className="aside-tablink">2</button>
          <button className="aside-tablink">3</button>
          <button className="aside-tablink">4</button>
          <button className="aside-tablink">5</button>
        </div>
        <div className="aside-tabcontent">Tabconent</div>
      </aside>
      <main>
        <Timeline
          options={{
            startYear: 800,
            endYear: 801,
            monthLength: 120,
            interval: 5,
          }}
        />
      </main>
    </div>
  );
}

export default App;
