import React from "react";
import logo from "../../assets/relevel.jpeg";
import "./HeaderBar.css";

const Header = ({ addCard }) => {
    return (
        <div>
            <nav className="navbar navbar-light navbar_color">
                <div className="container-fluid">
                    <div>
                        <a className="navbar-brand" href="/">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img
                                        src={logo}
                                        alt="logo"
                                        width="40"
                                        height="40"
                                    />
                                </div>
                                <div className="mx-2 text-white">
                                    <h2 className="brand_name">
                                        Relevel Trello
                                    </h2>
                                    <h3 className="brand_tagline text-center">
                                        By Unacademy
                                    </h3>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary shadow-lg"
                            onClick={addCard}
                        >
                            Add Card
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
