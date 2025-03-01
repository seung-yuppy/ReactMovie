import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/result.scss";
import API from "../keys/api";

function Result() {
    const searchParam = useParams();
    const [movieResults, setMovieResults] = useState([]);
    const [selectedYear, setSelectedYear] = useState(searchParam.year);
    const [selectedType, setSelectedType] = useState(searchParam.type);
    const navigate = useNavigate();

    const currentYear = new Date().getFullYear();
    const startYear = 1970;
    const years = Array.from(
        { length: currentYear - startYear + 1 },
        (_, index) => currentYear - index
    );

    useEffect(() => {
        async function getMovies() {
            if (searchParam.type !== "all") {
                const response = await fetch(
                    `${API.OMDB_URL}?apikey=${API.OMDB_API_KEY}&s=${searchParam.search}&y=${searchParam.year}&type=${searchParam.type}`
                );
                const data = await response.json();
                const movieData = data.Search;
                setMovieResults(movieData);
            } else if (searchParam.type === "all") {
                const response = await fetch(
                    `${API.OMDB_URL}?apikey=${API.OMDB_API_KEY}&s=${searchParam.search}&y=${searchParam.year}&t=${searchParam.type}`
                );
                const data = await response.json();
                const movieData = data.Search;
                setMovieResults(movieData);
            }
        }
        getMovies();
    }, [searchParam]);

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
        navigate(
            `/result/${searchParam.search}/${selectedYear}/${selectedType}`
        );
    };

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
        navigate(
            `/result/${searchParam.search}/${selectedYear}/${selectedType}`
        );
    };

    console.log(selectedType, selectedYear);

    return (
        <>
            <h2 className="a11y-hidden">컨텐츠 영역</h2>
            <main className="result-page">
                <section className="section">
                    <div className="section-wrapper">
                        <div className="wrapper-chkbox">
                            <h2 className="a11y-hidden">년도 선택 영역</h2>
                            <div className="chkbox-row">
                                <h2 className="row-title item-title">year</h2>
                                <div className="row-contentBox">
                                    <ul>
                                        <li>
                                            <label
                                                className="movie-text"
                                                htmlFor="yearall"
                                            >
                                                All
                                            </label>
                                            <input
                                                className="radio yearlist-yearchk"
                                                type="radio"
                                                name="year"
                                                id="yearall"
                                                value="all"
                                                onChange={handleYearChange}
                                                checked={selectedYear === "all"}
                                            />
                                        </li>
                                        {years.map((year, index) => (
                                            <li key={index}>
                                                <label
                                                    className="movie-text"
                                                    htmlFor={year}
                                                >
                                                    {year}
                                                </label>
                                                <input
                                                    className="radio yearlist-yearchk"
                                                    type="radio"
                                                    name="year"
                                                    id={year}
                                                    value={year}
                                                    onChange={handleYearChange}
                                                    checked={
                                                        selectedYear ===
                                                        year.toString()
                                                    }
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <h2 className="a11y-hidden">타입 선택 영역</h2>
                            <div className="chkbox-row">
                                <h2 className="row-title item-title">type</h2>
                                <div className="row-contentBox">
                                    <ul>
                                        <li>
                                            <label
                                                className="movie-text"
                                                htmlFor="genreall"
                                            >
                                                All
                                            </label>
                                            <input
                                                className="radio genrelist-genrechk"
                                                type="radio"
                                                name="genre"
                                                id="genreall"
                                                value="all"
                                                onChange={handleTypeChange}
                                                checked={selectedType === "all"}
                                            />
                                        </li>
                                        <li>
                                            <label
                                                className="movie-text"
                                                htmlFor="genremovie"
                                            >
                                                영화
                                            </label>
                                            <input
                                                className="radio genrelist-genrechk"
                                                type="radio"
                                                name="genre"
                                                id="genremovie"
                                                value="movie"
                                                onChange={handleTypeChange}
                                                checked={
                                                    selectedType === "movie"
                                                }
                                            />
                                        </li>
                                        <li>
                                            <label
                                                className="movie-text"
                                                htmlFor="genreseries"
                                            >
                                                시리즈
                                            </label>
                                            <input
                                                className="radio genrelist-genrechk"
                                                type="radio"
                                                name="genre"
                                                id="genreseries"
                                                value="series"
                                                onChange={handleTypeChange}
                                                checked={
                                                    selectedType === "series"
                                                }
                                            />
                                        </li>
                                        <li>
                                            <label
                                                className="movie-text"
                                                htmlFor="genreepisode"
                                            >
                                                에피소드
                                            </label>
                                            <input
                                                className="radio genrelist-genrechk"
                                                type="radio"
                                                name="genre"
                                                id="genreepisode"
                                                value="episode"
                                                onChange={handleTypeChange}
                                                checked={
                                                    selectedType === "episode"
                                                }
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h2 className="a11y-hidden">검색 결과 영역</h2>
                        <div className="wrapper-itemcontainer">
                            <ul className="itemcontainer-cardlist">
                                {movieResults &&
                                    movieResults.map((movieResult) => (
                                        <li
                                            className="itemcontainer-card"
                                            key={movieResult.imdbID}
                                        >
                                            <a
                                                href={`/detail/${movieResult.imdbID}`}
                                                className="card-item"
                                            >
                                                <img
                                                    className="result-image"
                                                    src={movieResult.Poster}
                                                    alt={movieResult.Title}
                                                />
                                                <div className="result-informationBox">
                                                    <h2 className="informationBox-title movie-title">
                                                        {movieResult.Title}
                                                    </h2>
                                                    <ul className="informationBox-subList">
                                                        <li className="subList-item">
                                                            <span className="informationBox-title type-text type-text-movie}">
                                                                {
                                                                    movieResult.Type
                                                                }
                                                            </span>
                                                        </li>
                                                        <li className="subList-item">
                                                            <span className="informationBox-title movie-year">
                                                                {
                                                                    movieResult.Year
                                                                }
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                    ))}
                            </ul>

                            <div className="itemcontainer-btnbox">
                                <button
                                    className="itemcontainer-btn"
                                    aria-label="더보기 버튼"
                                >
                                    <span className="btn-click">
                                        More Movies
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="wrapper-errormessage"></div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Result;
