import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeView from "./views/HomeView";
import Deneme from "./views/deneme";
import NoPage from "./views/NoPage";
import PredictionExcel from "./views/predictionexcel/PredictionExcel";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomeView />} />
          <Route path="/home" element={<HomeView />} />
          <Route path="/deneme" index element={<Deneme />} />
          <Route path="*" index element={<NoPage />} />
          <Route path="/predictionexcel" index element={<PredictionExcel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
