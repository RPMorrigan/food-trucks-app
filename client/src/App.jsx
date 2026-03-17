import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Form from "./pages/Form.jsx";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Food Trucks App 🚚</Link>
          <Link to="/form">Add Food Truck</Link>
        </nav>        
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>

      <h1>All Food Trucks</h1>
        <h2>Total number of food trucks: { }</h2>

        <section>
          <Home />
    </section>

      </main>
    </>
  );
}

export default App;
