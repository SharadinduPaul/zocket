import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/global";
import { Campaign } from "./pages/Campaign";
import { CreateCampaign } from "./pages/CreateCampaign";
import { Customers } from "./pages/Customers";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="campaign" element={<Campaign />} />
          <Route path="create-campaign" element={<CreateCampaign />} />
          <Route path="products" element={<Products />} />
          <Route path="customers" element={<Customers />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
