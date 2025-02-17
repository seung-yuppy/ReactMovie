import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/index.scss";
import Data from "../assets/json/main.json";
import BumbleBee from "../assets/images/poster-Transformers_2018.jpg";
import Venom from "../assets/images/poster-Venom.jpg";
import Wicked from "../assets/images/poster-Wicked_2024.jpg";

function MainSlider() {
    const movies = Data.movies;
    const movieImgArr = [BumbleBee, Venom, Wicked];

    return (
        <>
            <div className="swiper mainSwiper">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false,
                    }}
                >
                    {movies && movieImgArr.map((img, index) => (
                        <SwiperSlide key={index}>
                            {movies[index] && (
                                <div className="movie-imgBox">
                                    <img src={img} alt="사진없음" />
                                    <h2 className="a11y-hidden">영화 소개 영역</h2>
                                    <div className="movie-informationBox">
                                        <h2 className="movie-title">{movies[index].Title}</h2>
                                        <div className="movie-categoryBox">
                                            <p className="movie-category">Type :</p>
                                            <span className="movie-category">{movies[index].Genre}</span>
                                        </div>
                                        <p className="movie-description">{movies[index].Plot}</p>
                                        <a href={`/detail/${movies[index].imdbID}`} className="btn-click" aria-label="영화 정보">
                                            More Info
                                        </a>
                                    </div>
                                </div>
                            )}

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default MainSlider