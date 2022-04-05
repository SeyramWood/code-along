import { BrowserRouter, Routes, Route } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import Blog from "./pages/Blog";
import BlogList from "./pages/BlogList";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./Navbar/Navbar";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />}>
          <Route path="" element={<BlogList />} />
          <Route path=":blog" element={<BlogDetail />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
