import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/index.scss";
import { ThemeToggle } from "./ThemeToggle";
import { SearchForm } from "./SearchForm";

function Header() {
    const navigate = useNavigate();
    const onSearchMovie = (input, year, type) => {
        navigate(`/result/${input}/${year}/${type}`);
    };

    return (
        <>
            <header className="header">
                <div className="inner">
                    <h1 className="logo">
                        <a href="/" aria-label="MOVIE">
                            MOVIE
                        </a>
                    </h1>
                    <h2 className="a11y-hidden">유틸리티</h2>
                    <div className="utility">
                        <ul className="utility-list">
                            <SearchForm onSearchMovie={onSearchMovie} />
                            <ThemeToggle />
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
