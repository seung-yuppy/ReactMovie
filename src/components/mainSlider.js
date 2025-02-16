import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/index.scss";
import { useEffect, useState } from "react";
import Data from "../assets/json/main.json";
import BumbleBee from "../assets/images/poster-Transformers_2018.jpg";
import Venom from "../assets/images/poster-Venom.jpg";
import Wicked from "../assets/images/poster-Wicked_2024.jpg";

function MainSlider() {
    const [movies, setMovies] = useState([]);
    const movieImgArr = [BumbleBee, Venom, Wicked];

    useEffect(() => {
        setMovies(Data.movies);
    }, []);

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
                        <li className="swiper-slide">
                            <div className="movie-imgBox">
                                {movies.length > 0 && movieImgArr.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={img}
                                            alt="사진없음"
                                        />
                                        {movies[index] &&
                                            <>
                                                <h2 className="a11y-hidden">영화 소개 영역</h2>
                                                <div className="movie-informationBox">
                                                    <h2 className="movie-title">{movies[index].Title}</h2>
                                                    <div className="movie-categoryBox">
                                                        <p className="movie-category">Type :</p>
                                                        <span className="movie-category">{movies[index].Genre}</span>
                                                    </div>
                                                    <p className="movie-description">{movies[index].Plot}</p>
                                                    <a href={`/detail/${movies[index].imdbID}`} className="btn-click" aria-label="영화 정보">More Info</a>
                                                </div>
                                            </>
                                        }
                                    </SwiperSlide>
                                ))}
                            </div>
                        </li>


                    </Swiper>
                </ul>
            </div>
        </>
    );
}

export default MainSlider