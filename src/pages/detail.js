import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/detail.scss"
import API from "../keys/api";

function Detail() {
    const [movie, setMovie] = useState();
    const imdbId = useParams();

    useEffect(() => {
        async function getDetail() {
            const response = await fetch(`${API.OMDB_URL}?apikey=${API.OMDB_API_KEY}&i=${imdbId.id}`);
            const data = await response.json();
            setMovie(data);
        };

        getDetail();
    }, [imdbId]);

    if (!movie) {
        return <h1>Loading...</h1>
    };

    if (movie.Poster) {
        movie.Poster = movie.Poster.replace("SX300", "SX2000");
    };

    return (
        <>
            <h2 class="a11y-hidden">컨텐츠 영역</h2>
            <main class="detail-page">
                <section class="section">
                    <div class="container" id="movie-container">
                        <div class="movie-detail-content">
                            <div class="detail-leftBox">
                                <h2 class="a11y-hidden">영화 이미지 영역</h2>
                                <div class="movie-img">
                                    <img src={movie.Poster} onerror="this.src='/assets/images/poster-NotAvailable.png'" alt={movie.Title} />
                                </div>

                                <h2 class="a11y-hidden">옵션 선택 영역</h2>
                                <div class="movie-options">
                                    <ul>
                                        <li class="option-item">
                                            <a href="#none">
                                                <button type="button" class="option-img btn-favorite" aria-label="관심영화"></button>
                                                <span class="option-title">Favorite</span>
                                            </a>
                                        </li>
                                        <li class="option-item">
                                            <a href="#none">
                                                <button type="button" class="option-img btn-later" aria-label="나중에보기"></button>
                                                <span class="option-title">Watch Later</span>
                                            </a>
                                        </li>
                                        <li class="option-item">
                                            <a href="#none">
                                                <button type="button" class="option-img btn-watched" aria-label="이미 본 영화"></button>
                                                <span class="option-title">Watched</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <h2 class="a11y-hidden">영화 소개 영역</h2>
                            <div class="detail-rightBox">
                                <div class="movie-detailsBox">
                                    <div class="movie-title">{movie.Title}</div>
                                    <a href="#none" target="_blank" class="btn-click" aria-label="예고편">WATCH</a>

                                    <div class="detail-row">
                                        <span class="detail-text">STORYLINE</span>
                                        <p class="movie-description">{movie.Plot}</p>
                                    </div>

                                    <div class="detail-row">
                                        <span class="detail-text">movie information</span>
                                        <div class="movie-informationBox">
                                            <div class="movie-meta"><strong class="movie-infoTitle">평점</strong><p class="movie-text">{movie.imdbRating}</p></div>
                                            <div class="movie-yeaer"><strong class="movie-infoTitle">개봉</strong><p class="movie-text">{movie.Released}</p></div>
                                            <div class="movie-yeaer"><strong class="movie-infoTitle">시간</strong><p class="movie-text">{movie.Runtime}</p></div>
                                            <div class="movie-meta"><strong class="movie-infoTitle">장르</strong><p class="movie-text">{movie.Genre}</p></div>
                                            <div class="movie-meta"><strong class="movie-infoTitle">배우</strong><p class="movie-text">{movie.Actors}</p></div>
                                            <div class="movie-meta"><strong class="movie-infoTitle">감독</strong><p class="movie-text">{movie.Director}</p></div>
                                        </div>
                                    </div>
                                </div>

                                {/* <h2 class="a11y-hidden">영화 출연배우 영역</h2>
                                <div class="movie-actors">
                                    <span class="detail-text">actors</span>
                                    <ul class="actors-list">
                                        ${actorImages.map(actor => `<li class="actors-item"><img class="actors-img" src="${actor.image}"/><p class="actors-name">${actor.name}</p></li>`).join('')}
                                    </ul>
                                </div> */}

                                {/* <h2 class="a11y-hidden">추천 영화 영역</h2>
                                <div class="another-series">
                                    <span class="detail-text">similar movies</span>

                                    <div class="another-slideBox">
                                        <div class="swiper anotherSwiper">
                                            <ul class="swiper-wrapper">
                                                ${similarArray.map(movie =>
                                                    `
                                    <li class="swiper-slide">
                                        <a href="/public/inner-view.html?id=${movie.imdb_id}">
                                            <img src="${movie.image}" alt="${movie.title} Poster" onerror="this.src='/assets/images/poster-NotAvailable.png'"/>
                                            <div class="movieOverlay-box">
                                                <h2 class="movie-title">${movie.title}</h2>
                                            </div>
                                        </a>
                                    </li>
                                    `).join('')}
                                            </ul>
                                        </div>

                                        <div class="swiper-option">
                                            <div class="swiper-navigation">
                                                <div class="swiper-button-prev"><button type="button" class="btn-prev" aria-label="이전"></button></div>
                                                <div class="swiper-button-next"><button type="button" class="btn-next" aria-label="다음"></button></div>
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