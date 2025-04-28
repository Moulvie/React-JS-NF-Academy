import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages";
import Teams from "./Pages/Team";
import Kontaks from "./pages/kontak";
import Book from "./Pages/Books";



function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
          <Route index element={<Home />} />
          <Route path="books" element={<Book/>} />
          <Route path="team" element={<Teams />} />
          <Route path="kontak" element={<Kontaks/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;