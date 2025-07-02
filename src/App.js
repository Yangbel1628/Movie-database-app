import './css/App.css';
import Favorites from './pages/Favorites';
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";



function App() {

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-Content">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/Favorites" element={ <Favorites /> } />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
