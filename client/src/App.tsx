import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/HomePage";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import MyPage from "./pages/MyPage";
import Users from './components/users'

const App = (): JSX.Element => {
  return (
    <main className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
          <Users/>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
