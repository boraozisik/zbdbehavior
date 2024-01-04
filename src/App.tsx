import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeView from "./views/HomeView";
import Deneme from "./views/deneme";
import NoPage from "./views/NoPage";
import PredictionExcel from "./views/predictionexcel/PredictionExcel";
import Charts from "./views/charts/Charts";
import DefineCampaign from "./views/defineCampaign/DefineCampaign";
import LoyaltyMeter from "./views/loyaltymeter/LoyaltyMeter";
import RewardLoyalOnes from "./views/rewardloyalones/RewardLoyalOnes";

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
          <Route path="/charts" index element={<Charts />} />
          <Route path="/campaign" index element={<DefineCampaign />} />
          <Route path="/loyaltymeter" index element={<LoyaltyMeter />} />
          <Route path="/rewardloyals" index element={<RewardLoyalOnes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
