import "../styles/index.scss";
import Data from "../assets/json/trending.json";
import { Swiper, SwiperSlide } from "swiper/react";

function SeriesSlider() {
    const movies = Data.seriesMovies;

    return (
        <>
            <div className="slide-box">
                <div className="swiper seriesSwiper">
                    <Swiper
                        spaceBetween={30}
                        speed={1000}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: ".seriesSwiper .swiper-option .swiper-pagination",
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                                pagination: false,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            1500: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                            2040: {
                                slidesPerView: 7,
                            },
                        }}
                    >
                        {movies && movies.map((movie) => (
                            <SwiperSlide key={movie.imdbID}>
                                <a href={`/detail/${movie.imdbID}`} className="slide-item">
                                    <div className="movie-imgBox">
                                        <img src={movie.Poster} alt="Series" />
                                    </div>
                                    <div className="movie-infoBox">
                                        <h2 className="movie-title">{movie.Title}</h2>
                                        <div className="movie-info">
                                            <p className="movie-ratings">{movie.Ratings[0].Value}</p>
                                            <p className="movie-type">{movie.Genre}</p>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default SeriesSlider;