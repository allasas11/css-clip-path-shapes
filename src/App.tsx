import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/HomePage";
import MainPageLayout from "./layouts/MainPageLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPageLayout />}>
          <Route path="/" element={<Home />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
