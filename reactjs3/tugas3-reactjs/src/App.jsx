import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages";
import Teams from "./Pages/Team";
import Contacts from "./pages/contact";
import Books from "./Pages/Books";




function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
          <Route index element={<Home />} />
          <Route path="books" element={<Books/>} />
          <Route path="team" element={<Teams />} />
          <Route path="contact" element={<Contacts/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;