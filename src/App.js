import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Lodgment from "./pages/Lodgment";
import Layout from './Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path={"/Lodgment/:id"} element={<Lodgment />}></Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
