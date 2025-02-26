import "../styles/index.scss";
import Data from "../assets/json/trending.json";
import { Swiper, SwiperSlide } from "swiper/react";
import Interstellar from "../assets/images/poster-Interstellar.jpg";
import Dragonkeeper from "../assets/images/poster-Dragonkeeper.png";
import Dune from "../assets/images/poster-Dune2.jpg";
import Garfield from "../assets/images/poster-Thegarfield.jpg";
import Alien from "../assets/images/poster-Alien.jpg";
import Kingdom from "../assets/images/poster-Planetoftheapes.jpg"

function MovieSlider() {
    const movies = Data.trendingMovies;
    const movieImgArr = [Interstellar, Dragonkeeper, Dune, Garfield, Alien, Kingdom];

    return (
        <>
            <div className="slide-box">
                <div className="swiper trending-swiper">
                    <Swiper
                        slidesPerView={2.5}
                        spaceBetween={30}
                        loop={false}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: ".trending-swiper .swiper-option .swiper-navigation .swiper-button-next",
                            prevEl: ".trending-swiper .swiper-option .swiper-navigation .swiper-button-prev",
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.2,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 1.5,
                                spaceBetween: 20,
                            },
                            1500: {
                                slidesPerView: 2.5,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {movies && movieImgArr.map((img, index) => (
                            <SwiperSlide key={index}>
                                {movies[index] && (
                                    <a href={`/detail/${movies[index].imdbID}`} class="slide-item">
                                        <div className="slide-item">
                                            <div className="movie-imgBox">
                                                <img src={img} alt="Movie" />
                                            </div>
                                            <div className="movie-infoBox">
                                                <h2 className="movie-title">{movies[index].Title}</h2>
                                                <div className="movie-info">
                                                    <p className="movie-time">{movies[index].Runtime}</p>
                                                    <p className="movie-type">{movies[index].Type}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default MovieSlider;