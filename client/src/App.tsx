import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/HomePage";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
