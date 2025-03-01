import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/result.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../store/slice/searchSlice";

function Result() {
    const searchParam = useParams();
    const dispatch = useDispatch();
    const movieResults = useSelector((state) => state.search.results);

    useEffect(() => {
        dispatch(fetchSearch(searchParam.search));
    }, [dispatch, searchParam]);

    return (
        <>
            <h2 className="a11y-hidden">컨텐츠 영역</h2>
            <main className="result-page">
                <section className="section">
                    <div className="section-wrapper">
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
