import { Swiper, SwiperSlide } from "swiper/react";

function PopularSeries() {
    // 하단부 인기영화 시리즈 버튼 만들기
    const popularMovies = [
        "Avengers",
        "Spider-Man",
        "Harry Potter",
        "Frozen",
        "Transformers",
        "Dune",
        "Home Alone",
    ];

    return (
        <>
            <h2 className="a11y-hidden">사람들이 많이 보는 영화</h2>
            <div className="popular-seriesBox">
                <h2 className="item-title">Popular Series</h2>
                <div className="swiper mainBotSwiper">
                    <ul className="swiper-wrapper">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={7}
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 15,
                                },
                                1024: {
                                    slidesPerView: 5,
                                },
                                1300: {
                                    slidesPerView: 7,
                                },
                            }}
                        >
                            {popularMovies &&
                                popularMovies.map((popularMovie, index) => (
                                    <SwiperSlide key={index}>
                                        <li className="swiper-slide popular-item">
                                            <a href={`/result/${popularMovie}`}>
                                                {popularMovie}
                                            </a>
                                        </li>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default PopularSeries;
