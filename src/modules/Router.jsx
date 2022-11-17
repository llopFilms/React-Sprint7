import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inici from "../pages/Inici/Inici";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inici />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
