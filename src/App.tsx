import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Blog from "./page/Blog/Blog";
import Docs from "./page/Docs/Docs";
import TheGraph from "./page/TheGraph/TheGraph";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <div className="">
          <Header />
          <Routes>
            <Route path="/" element={<TheGraph />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
