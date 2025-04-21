import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages";
import Books from "./pages/books";
import Teams from "./components/shared/team";
import Contacts from "./components/shared/contact";







function App() {

  return (
    <>
    <div className="container">
      <BrowserRouter>
        <Routes>
        <Route index element={<Home />} />
          <Route path="books" element={<Books/>} />
          <Route path="Teams" element={<Teams/>} />
          <Route path="Contacts" element={<Contacts/>} />
        </Routes>
          
        
      </BrowserRouter>
      
    </div>
    </>
  );
}


export default App;
