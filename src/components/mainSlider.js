import { Swiper, SwiperSlide } from "swiper/react";
import { useMainMovies } from "../hooks/useMainMovies";
import "../styles/index.scss";

function MainSlider() {
    const { movies, imdbIDs } = useMainMovies();

    return (
        <>
            <div className="swiper mainSwiper">
                <ul className="swiper-wrapper">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 7000,
                            disableOnInteraction: false,
                        }}
                    >
                        {movies && movies.map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <li className="swiper-slide">
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
                                </li>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </ul>
            </div>
        </>
    );
}

export default MainSlider