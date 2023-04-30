import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/HomePage";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import UserPage from "./pages/UserPage";

const App: FC = () => {
  return (
    <main className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            <Route path="/userpage" element={<UserPage />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;



//////////login, signup toevoegingen//////////////

//import Login from './pages/Login'
//import Signup from './pages/Signup'

            /*  <Route path="/login" element={<login />} /> */
            /* <Route path="/signup" element={<signup />} /> */

/////////////////////////////////////////////////////            