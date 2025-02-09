import { useEffect, useState } from "react";
import "../styles/index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import API from "../services/api";

function Main() {
    const [movies, setMovies] = useState([]);
    const [imdbIDs, setImdbIDs] = useState({});

    useEffect(() => {
        async function getMovies() {
            const response = await fetch(`${API.TMDB_URL}now_playing?api_key=${API.TMDB_API_KEY}`);
            const data = await response.json();
            const movieDatas = data.results;
            setMovies(movieDatas);

            // movieDatas에는 총 20개의 트렌드한 영화가 있다. --> 이 20개의 영화는 TMDBID를 가지고 있어 상세페이지를 가기 위해서는 OMDBID를 필요로 하기 때문에
            // getIMDBID 함수를 만들어 20개의 배열의 반복문을 실행한다. 
            movieDatas.forEach((movieData) => {
                getIMDBID(movieData.id);
            });
        };

        // data에 IMDBID가 담기면 prev(기존의 배열)에 새로운 movieId를 key로 data.imdb_id를 value로 객체 타입으로 imdbIDs에 넣는다.
        // [movieId]에 대괄호를 넣은 이유는 동적으로 key를 관리하기 위함이다.
        async function getIMDBID(movieId) {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `${API.TMDB_ACCESS_TOKEN}`,
                }
            };
            const response = await fetch(`${API.TMDB_URL}${movieId}}/external_ids`, options);
            const data = await response.json();
            setImdbIDs((prev) => ({ ...prev, [movieId]: data.imdb_id }));
        };

        getMovies();
    }, []);

    return (
        <>
            <main className="main-page">
                <section className="section section01">
                    <div className="contents">
                        <h2 className="a11y-hidden">메인슬라이드 영역</h2>
                        <div className="swiper mainSwiper">
                            <ul className="swiper-wrapper">
                                <li className="swiper-slide">
                                    <Swiper
                                        loop={true}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        pagination={{ clickable: true }}
                                    >
                                        {movies && movies.map((movie) => (
                                            <SwiperSlide key={movie.id}>
                                                <div className="movie-imgBox">
                                                    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
                                                </div>
                                                <h2 className="a11y-hidden">영화 소개 영역</h2>
                                                <div className="movie-informationBox">
                                                    <h2 className="movie-title">{movie.title}</h2>
                                                    <div className="movie-categoryBox">
                                                        <p className="movie-category">Type :</p>
                                                        <span className="movie-category">{movie.Genre}</span>
                                                    </div>
                                                    <p className="movie-description">{movie.overview}</p>
                                                    {imdbIDs[movie.id] && (
                                                        <a href={`/detail/${imdbIDs[movie.id]}`} className="btn-click" aria-label="영화 정보">More Info</a>
                                                    )}

                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </li>
                            </ul>
                        </div>

                        <h2 className="a11y-hidden">사람들이 많이 보는 영화</h2>
                        <div className="popular-seriesBox">
                            <h2 className="item-title">Popular Series</h2>
                        </div>
                    </div>
                </section>

                <section className="section section02">
                    <div className="contents">
                        <div className="contents-box">
                            <h2 className="item-title">Trending now</h2>
                            <h2 className="a11y-hidden">유행하는 영화 슬라이드 영역</h2>
                            <div className="slide-box">
                                <div className="swiper trending-swiper">
                                </div>
                            </div>
                        </div>

                        <div className="contents-box">
                            <h2 className="item-title">Series</h2>
                            <h2 className="a11y-hidden">시리즈 슬라이드 영역</h2>
                            <div className="slide-box">
                                <div className="swiper seriesSwiper">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Main;
