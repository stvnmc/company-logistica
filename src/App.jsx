import { useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./page/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <main>
        <NavBar />
        <Routes>
          <Route path="/company" element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
