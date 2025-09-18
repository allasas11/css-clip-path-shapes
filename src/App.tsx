import { BrowserRouter, Routes, Route} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Home from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
