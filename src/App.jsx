import "./App.css";
import {Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./components/Pages/Home";
import MySkill from "./components/Pages/MySkill";
import MyServices from "./components/Pages/MyServices";
import Projects from "./components/Pages/Projects";
import Testimonials from "./components/Pages/Testimonials";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <>
<Routes>
     <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />  
        <Route path="/MySkill" element={<MySkill />} />    
        <Route path="/MyServices" element={<MyServices />} />    
        <Route path="/Projects" element={<Projects />} />    
        <Route path="/Testimonials" element={<Testimonials />} />    
        <Route path="/Contact" element={<Contact />} />    
      </Route>
</Routes>
    </>
  );
}

export default App;
