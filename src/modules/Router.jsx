import { BrowserRouter, Routes, Route } from "react-router-dom";
import Benvinguda from "../pages/Benvinguda/Benvinguda";
import Inici from "../pages/Inici/Inici";
import Error from "../pages/Error/Error";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Benvinguda/>}/>
      <Route path="/inici" element={<Inici />} />
      <Route path="*" element={<Error/>}/>
    </Routes>
  </BrowserRouter>
);

export default Router;
