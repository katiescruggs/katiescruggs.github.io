import { Link, Routes, Route } from "react-router-dom";
import Gauge from "./components/Gauge";
import Blog from "./components/Blog";

export default function App() {
  return (
    <div>
      <h1>Katie Scruggs</h1>
      <nav 
        style={{borderBottom: "solid 1px", paddingBottom: "1rem",}}>
          <Link to="/gauge">Gauge</Link>
          <Link to="/blog">Blog</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Blog />}/>
        <Route path="gauge" element={<Gauge />}/>
        <Route path="blog" element={<Blog />} />
      </Routes>
    </div>
  );
} 