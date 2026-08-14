import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import AgentDetails from "./pages/AgentDetails";
import PropertyDetails from "./pages/PropertyDetails";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Agent Details */}
        <Route path="/agent/:id" element={<AgentDetails />} />

        {/* Property Details */}
        <Route path="/property/:id" element={<PropertyDetails />} />

        {/* Blog Details */}
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;