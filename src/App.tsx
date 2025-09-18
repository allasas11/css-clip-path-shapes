import { BrowserRouter, Routes, Route} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Home from "./pages/HomePage";
import MainPageLayout from "./layouts/MainPageLayout";

function App() {
  return (
    <BrowserRouter>
      <MainContainer>
        <Routes>
          <Route element={<MainPageLayout />}>
            <Route path="/" element={<Home />} />
            {/* Add more routes here as needed */}
          </Route>
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
