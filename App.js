
import React from "react";
import ReactDOM from "react-dom/client";




// const parent = React.createElement("h1", {className: "heading"}, "Hello React API Implementation!")


const Header = () =>{
    return(
        <div className="header">
            <div className="container">
                <div className="logo-col">
                    <span className="f">F</span>
                    <span className="o">o</span>
                    <span className="o">o</span>
                    <span className="d">D</span>
                    <span className="healthy">healthy</span>
                </div>
                <div className="nav-col">
                    <ul>
                        <li className="active">Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Card</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const BodyLayout = () => {
    return(
        <div className="bodyWrapper">
            <div className="container">
                <h1>This is body section</h1>     
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>  
            </div>
        </div>
    )
}

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                Copyright © 2026 Heathy Food for API Implementation UI Products Demo. All rights reserved.
            </div>
        </div>
    )
}

const AppLayout = () => {
    return(
        <>
             <Header />
             <BodyLayout />
             <Footer />
        </>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout></AppLayout>);