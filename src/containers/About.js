import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"

class About extends React.Component {
    
    render() {
        return (
            <div>
                <Header />
                <div>
                    <h3>HELLO</h3>
                    <p>This is my resteraunt about shit
                        Yon don't hope to happy lunch
                        because i will tell you "Fuck bitch"
                </p>
                    <h4>from Shit Cafe</h4>
                </div>
                <Footer company="Kawin" email="lol@asd.com" />
            </div>
        );
    }
}

export default About;
