import React from 'react';
import logo from './logo.svg';
import './App.css';
import CalendarStyled from "./views/application/calendar/CalendarStyled";
import SubCard from "./views/ui-component/cards/SubCard";
import Calendar from "./views/application/calendar";

function App() {
  return (
    <div className="App">
        <Calendar/>
    </div>
  );
}

export default App;
