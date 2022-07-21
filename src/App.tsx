import React from "react";
import "./App.css";
import { PreviewList } from "./components/PreviewList/PreviewList";
import { ExchangePage } from "./components/ExchangePage/ExchangePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PreviewList />} />
        <Route path="/:id" element={<ExchangePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
