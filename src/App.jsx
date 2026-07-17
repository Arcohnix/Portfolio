import Portfolio from "./Portfolio";
import ProjectPage from "./ProjectPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/project/:slug" element={<ProjectPage />} />
    </Routes>
  );
}
