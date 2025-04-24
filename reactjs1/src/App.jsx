import Home from "./pages";
import Books from "./pages/books";
import Contact from "./pages/contact";
import Team from "./pages/team";

function App() {
  return (
    <Router>
      <Routes>
      <Route index element={<Home/>} />
      <Route path="/books" element={<Books/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
