import { useState } from "react";
import "../styles/index.scss";

export const SearchForm = ({ onSearchMovie }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearchMovie(input);
    };

    return (
        <>
            <h2 className="a11y-hidden">검색창</h2>
            <li className="utility-item">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="filter-box">
                        <input
                            type="text"
                            className="form-input input"
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="btn-search"
                            aria-label="검색"
                        ></button>
                    </div>
                </form>
            </li>
        </>
    );
};
