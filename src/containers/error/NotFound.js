import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
class NotFound extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <h1 className="text-center mt-5">
                        404
                </h1>
                    <h3 className="text-center mb-5">Not Found</h3>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default NotFound;
