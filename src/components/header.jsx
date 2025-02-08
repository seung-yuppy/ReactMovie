import React from "react";
import "../styles/layout/_index.scss";
import "../styles/components/_index.scss";
import "../styles/base/_index.scss";
import "../styles/abstracts/_index.scss";

function Header() {
    return (
        <header className="header">
            <div className="inner">
                <h1 className="logo">
                    <a href="/" aria-label="MOVIE">MOVIE</a>
                </h1>
                <h2 className="a11y-hidden">유틸리티</h2>
                <div className="utility">
                    <ul className="utility-list">
                        <h2 className="a11y-hidden">검색창</h2>
                        <li className="utility-item">
                            <form className="form">
                                <select className="form-select select-year"></select>

                                <select className="form-select select-type">
                                    <option value="all">전체</option>
                                    <option value="movie">영화</option>
                                    <option value="series">시리즈</option>
                                    <option value="episode">에피소드</option>
                                </select>

                                <div className="filter-box">
                                    <input type="text" className="form-input input" />
                                    <button type="submit" className="btn-search" aria-label="검색"></button>
                                </div>
                            </form>
                        </li>

                        <li className="utility-item">
                            <button type="button" className="btn-change" aria-label="모드 변경"></button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;