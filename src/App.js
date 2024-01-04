import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './about';
import Home from './home';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
