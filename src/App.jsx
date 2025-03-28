import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductServices from "./page/productServices/ProductServices";
import Promotions from "./page/promotions/Promotions";
import NewsEvents from "./page/newsEvents/NewsEvents";
import SafetyTips from "./page/safetyTips/SafetyTips";
import FAQS from "./page/faqs/FAQS";
import Location from "./page/locaton/Location";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/product" element={<ProductServices />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/news" element={<NewsEvents />} />
          <Route path="/safety-tips" element={<SafetyTips />} />
          <Route path="/faqs" element={<FAQS />} />
          <Route path="/location" element={<Location />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
