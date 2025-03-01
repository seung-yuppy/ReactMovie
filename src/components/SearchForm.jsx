import { useState } from "react";
import "../styles/index.scss";

export const SearchForm = ({ onSearchMovie }) => {
    const [input, setInput] = useState("");
    const [year, setYear] = useState("all");
    const [type, setType] = useState("all");
    const currentYear = new Date().getFullYear();
    const startYear = 1970;
    // Array.from은 새로운 배열로 변환하는 메서드
    // 첫번째 인자는 배열의 길이를 정의하고
    // 두번째 인자는 각 요소를 생성하기 위한 콜백함수
    const years = Array.from(
        { length: currentYear - startYear + 1 },
        (_, index) => currentYear - index
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearchMovie(input, year, type);
    };

    return (
        <>
            <h2 className="a11y-hidden">검색창</h2>
            <li className="utility-item">
                <form className="form" onSubmit={handleSubmit}>
                    <select
                        className="form-select select-year"
                        onChange={(e) => setYear(e.target.value)}
                    >
                        <option value="all">전체</option>
                        {years.map((year, index) => (
                            <option key={index} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>

                    <select
                        className="form-select select-type"
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="all">전체</option>
                        <option value="movie">영화</option>
                        <option value="series">시리즈</option>
                        <option value="episode">에피소드</option>
                    </select>

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
