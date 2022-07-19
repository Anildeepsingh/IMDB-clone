import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from "./components/Favourites";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies />
              <Footer />
            </>
          }
        />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
