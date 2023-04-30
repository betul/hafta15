import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogEkrani from "./layouts/BlogEkrani";
import HataEkrani from "./layouts/HataEkrani";
import IletisimEkrani from "./layouts/IletisimEkrani";
import Sablon from "./layouts/Sablon";
import AnaEkran from "./layouts/AnaEkran";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Sablon />}>
       <Route index element={<AnaEkran />} />
        <Route path="blogs" element={<BlogEkrani />} />
        <Route path="contact" element={<IletisimEkrani />} />
        <Route path="*" element={<HataEkrani />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
