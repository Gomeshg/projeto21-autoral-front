import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyle/globalstyle";
import React from "react";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Line from "./pages/Dashboard";

export default function App() {
  // LOGIC
  // UI
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/line" element={<Line />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
