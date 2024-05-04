import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact, HomePage } from "./pages/index";

import Header from "./components/Header";
import { Footer } from "./components";
const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
