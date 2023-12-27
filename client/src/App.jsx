import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactDOM from "react-dom/client";
import Indexpages from "./pages/Indexpages";
import LoginPage from "./pages/loginPage";
import Layout from "./Layout";
import Registerpage from "./pages/Registerpage";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Indexpages />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Registerpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
