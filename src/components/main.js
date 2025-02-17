import "../styles/index.scss";
import "swiper/swiper-bundle.css";
import PopularSeries from "./popularSeries";
import MainSlider from "./mainSlider";
import MovieSlider from "./movieSlider";
import SeriesSlider from "./seriesSlider";

function Main() {
    return (
        <>
            <main className="main-page">
                <section className="section section01">
                    <div className="contents">
                        <h2 className="a11y-hidden">메인슬라이드 영역</h2>
                        <MainSlider />
                        <PopularSeries />
                    </div>
                </section>

                <section className="section section02">
                    <div className="contents">
                        <div className="contents-box">
                            <h2 className="item-title">Trending now</h2>
                            <h2 className="a11y-hidden">유행하는 영화 슬라이드 영역</h2>
                            <MovieSlider />
                        </div>

                        <div className="contents-box">
                            <h2 className="item-title">Series</h2>
                            <h2 className="a11y-hidden">시리즈 슬라이드 영역</h2>
                            <SeriesSlider />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Main;
