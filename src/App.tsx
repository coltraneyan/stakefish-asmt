import React from "react";
import "./App.css";
import { ExchangePage } from "./components/ExchangePage/ExchangePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home/Home";
import GlobalCSS from "./global.styles";

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ExchangePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
