import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main/main";
import { Home } from "./pages/home";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/login";
import { Response } from "./pages/main/response";
import { NotFound } from "./pages/notFound";

function App() {
  return (
    <Router>
      <div className="pb-[255px]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/response" element={<Response />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;