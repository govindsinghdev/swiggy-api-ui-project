
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BodyLayout from "./components/BodyLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";


// const parent = React.createElement("h1", {className: "heading"}, "Hello React API Implementation!")




const AppLayout = () => {
    return(
        <>
             <Header />
             <Routes>
                <Route path="/" element={<BodyLayout limit={4} showData={true}/>} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services showData={false}/>} />
                <Route path="/contact" element={<Contact />} />
             </Routes>

             {/* <BodyLayout /> */}

            
             <Footer />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
         <AppLayout/>
     </BrowserRouter>

);