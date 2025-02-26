import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/detail.scss";
import API from "../keys/api";

function Detail() {
    const [movie, setMovie] = useState();
    const imdbId = useParams();

    useEffect(() => {
        async function getDetail() {
            const response = await fetch(
                `${API.OMDB_URL}?apikey=${API.OMDB_API_KEY}&i=${imdbId.id}`
            );
            const data = await response.json();
            setMovie(data);
        }

        getDetail();
    }, [imdbId]);

    if (!movie) {
        return (
            <>
                <div className="spinner-box">
                    <div className="spinner-img"></div>
                </div>
            </>
        );
    }

    if (movie.Poster) {
        movie.Poster = movie.Poster.replace("SX300", "SX2000");
    }

    return (
        <>
            <h2 className="a11y-hidden">컨텐츠 영역</h2>
            <main className="detail-page">
                <section className="section">
                    <div className="container" id="movie-container">
                        <div className="movie-detail-content">
                            <div className="detail-leftBox">
                                <h2 className="a11y-hidden">
                                    영화 이미지 영역
                                </h2>
                                <div className="movie-img">
                                    <img
                                        src={movie.Poster}
                                        onerror="this.src='/assets/images/poster-NotAvailable.png'"
                                        alt={movie.Title}
                                    />
                                </div>

                                <h2 className="a11y-hidden">옵션 선택 영역</h2>
                                <div className="movie-options">
                                    <ul>
                                        <li className="option-item">
                                            <a href="#none">
                                                <button
                                                    type="button"
                                                    className="option-img btn-favorite"
                                                    aria-label="관심영화"
                                                ></button>
                                                <span className="option-title">
                                                    Favorite
                                                </span>
                                            </a>
                                        </li>
                                        <li className="option-item">
                                            <a href="#none">
                                                <button
                                                    type="button"
                                                    className="option-img btn-later"
                                                    aria-label="나중에보기"
                                                ></button>
                                                <span className="option-title">
                                                    Watch Later
                                                </span>
                                            </a>
                                        </li>
                                        <li className="option-item">
                                            <a href="#none">
                                                <button
                                                    type="button"
                                                    className="option-img btn-watched"
                                                    aria-label="이미 본 영화"
                                                ></button>
                                                <span className="option-title">
                                                    Watched
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <h2 className="a11y-hidden">영화 소개 영역</h2>
                            <div className="detail-rightBox">
                                <div className="movie-detailsBox">
                                    <div className="movie-title">
                                        {movie.Title}
                                    </div>
                                    <a
                                        href="#none"
                                        target="_blank"
                                        className="btn-click"
                                        aria-label="예고편"
                                    >
                                        WATCH
                                    </a>

                                    <div className="detail-row">
                                        <span className="detail-text">
                                            STORYLINE
                                        </span>
                                        <p className="movie-description">
                                            {movie.Plot}
                                        </p>
                                    </div>

                                    <div className="detail-row">
                                        <span className="detail-text">
                                            movie information
                                        </span>
                                        <div className="movie-informationBox">
                                            <div className="movie-meta">
                                                <strong className="movie-infoTitle">
                                                    평점
                                                </strong>
                                                <p className="movie-text">
                                                    {movie.imdbRating}
                                                </p>
                                            </div>
                                            <div className="movie-yeaer">
                                                <strong className="movie-infoTitle">
                                                    개봉
                                                </strong>
                                                <p className="movie-text">
                                                    {movie.Released}
                                                </p>
                                            </div>
                                            <div className="movie-yeaer">
                                                <strong className="movie-infoTitle">
                                                    시간
                                                </strong>
                                                <p className="movie-text">
                                                    {movie.Runtime}
                                                </p>
                                            </div>
                                            <div className="movie-meta">
                                                <strong className="movie-infoTitle">
                                                    장르
                                                </strong>
                                                <p className="movie-text">
                                                    {movie.Genre}
                                                </p>
                                            </div>
                                            <div className="movie-meta">
                                                <strong className="movie-infoTitle">
                                                    배우
                                                </strong>
                                                <p className="movie-text">
                                                    {movie.Actors}
                                                </p>
                                            </div>
                                            <div className="movie-meta">
                                                <strong className="movie-infoTitle">
                                                    감독
                                                </strong>
                                                <p className="movie-text">
                                                    {movie.Director}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <h2 className="a11y-hidden">영화 출연배우 영역</h2>
                                <div className="movie-actors">
                                    <span className="detail-text">actors</span>
                                    <ul className="actors-list">
                                        ${actorImages.map(actor => `<li className="actors-item"><img className="actors-img" src="${actor.image}"/><p className="actors-name">${actor.name}</p></li>`).join('')}
                                    </ul>
                                </div> */}

                                {/* <h2 className="a11y-hidden">추천 영화 영역</h2>
                                <div className="another-series">
                                    <span className="detail-text">similar movies</span>

                                    <div className="another-slideBox">
                                        <div className="swiper anotherSwiper">
                                            <ul className="swiper-wrapper">
                                                ${similarArray.map(movie =>
                                                    `
                                    <li className="swiper-slide">
                                        <a href="/public/inner-view.html?id=${movie.imdb_id}">
                                            <img src="${movie.image}" alt="${movie.title} Poster" onerror="this.src='/assets/images/poster-NotAvailable.png'"/>
                                            <div className="movieOverlay-box">
                                                <h2 className="movie-title">${movie.title}</h2>
                                            </div>
                                        </a>
                                    </li>
                                    `).join('')}
                                            </ul>
                                        </div>

                                        <div className="swiper-option">
                                            <div className="swiper-navigation">
                                                <div className="swiper-button-prev"><button type="button" className="btn-prev" aria-label="이전"></button></div>
                                                <div className="swiper-button-next"><button type="button" className="btn-next" aria-label="다음"></button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Detail;
