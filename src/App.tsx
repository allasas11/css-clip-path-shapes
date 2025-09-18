import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/HomePage";
import MainPageLayout from "./layouts/MainPageLayout";
import BasicClipPathShape from "./pages/BasicClipPathShape";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/basic-clip-path" element={<BasicClipPathShape />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
