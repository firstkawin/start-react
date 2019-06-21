import React from "react";

const Footer = (porps) => {
    const { company, email } = porps;
    return (
        <div className="container-fluid">
            <hr />
            <div className="text-center text-uppercase">
                <small>
                    <span className="text-danger" > Powered By {company} </span> | Contact By Email : {email}
                </small>
            </div>
        </div>
    )
}

export default Footer;