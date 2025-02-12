import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/result.scss";
import API from "../keys/api";

function Result() {
    const searchParam = useParams();
    const [movieResults, setMovieResults] = useState([]);

    useEffect(() => {
        async function getMovies() {
            const response = await fetch(`${API.OMDB_URL}?apikey=${API.OMDB_API_KEY}&s=${searchParam.search}`);
            const data = await response.json();
            const movieData = data.Search;
            setMovieResults(movieData);
        }
        getMovies();
    }, [searchParam]);

    return (
        <>
            <h2 className="a11y-hidden">컨텐츠 영역</h2>
            <main className="result-page">
                <section className="section">
                    <div className="section-wrapper">
                        <div className="wrapper-chkbox">
                            <h2 className="a11y-hidden">년도 선택 영역</h2>
                            <div className="chkbox-row">
                                <h2 className="row-title item-title">year</h2>
                                <div className="row-contentBox">
                                    <ul>
                                        <li><label className="movie-text" for="yearall">All</label><input className="radio yearlist-yearchk" type="radio" name="year" id="yearall" value="all" /></li>
                                        <li><label className="movie-text" for="year25">2025</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year25" value="2025" /></li>
                                        <li><label className="movie-text" for="year24">2024</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year24" value="2024" /></li>
                                        <li><label className="movie-text" for="year23">2023</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year23" value="2023" /></li>
                                        <li><label className="movie-text" for="year22">2022</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year22" value="2022" /></li>
                                        <li><label className="movie-text" for="year21">2021</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year21" value="2021" /></li>
                                        <li><label className="movie-text" for="year20">2020</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year20" value="2020" /></li>
                                        <li><label className="movie-text" for="year19">2019</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year19" value="2019" /></li>
                                        <li><label className="movie-text" for="year18">2018</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year18" value="2018" /></li>
                                        <li><label className="movie-text" for="year17">2017</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year17" value="2017" /></li>
                                        <li><label className="movie-text" for="year16">2016</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year16" value="2016" /></li>
                                        <li><label className="movie-text" for="year15">2015</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year15" value="2015" /></li>
                                        <li><label className="movie-text" for="year14">2014</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year14" value="2014" /></li>
                                        <li><label className="movie-text" for="year13">2013</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year13" value="2013" /></li>
                                        <li><label className="movie-text" for="year12">2012</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year12" value="2012" /></li>
                                        <li><label className="movie-text" for="year11">2011</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year11" value="2011" /></li>
                                        <li><label className="movie-text" for="year10">2010</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year10" value="2010" /></li>
                                        <li><label className="movie-text" for="year09">2009</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year09" value="2009" /></li>
                                        <li><label className="movie-text" for="year08">2008</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year08" value="2008" /></li>
                                        <li><label className="movie-text" for="year07">2007</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year07" value="2007" /></li>
                                        <li><label className="movie-text" for="year06">2006</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year06" value="2006" /></li>
                                        <li><label className="movie-text" for="year05">2005</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year05" value="2005" /></li>
                                        <li><label className="movie-text" for="year04">2004</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year04" value="2004" /></li>
                                        <li><label className="movie-text" for="year03">2003</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year03" value="2003" /></li>
                                        <li><label className="movie-text" for="year02">2002</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year02" value="2002" /></li>
                                        <li><label className="movie-text" for="year01">2001</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year01" value="2001" /></li>
                                        <li><label className="movie-text" for="year00">2000</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year00" value="2000" /></li>
                                        <li><label className="movie-text" for="year99">1999</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year99" value="1999" /></li>
                                        <li><label className="movie-text" for="year98">1998</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year98" value="1998" /></li>
                                        <li><label className="movie-text" for="year97">1997</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year97" value="1997" /></li>
                                        <li><label className="movie-text" for="year96">1996</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year96" value="1996" /></li>
                                        <li><label className="movie-text" for="year95">1995</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year95" value="1995" /></li>
                                        <li><label className="movie-text" for="year94">1994</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year94" value="1994" /></li>
                                        <li><label className="movie-text" for="year93">1993</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year93" value="1993" /></li>
                                        <li><label className="movie-text" for="year92">1992</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year92" value="1992" /></li>
                                        <li><label className="movie-text" for="year91">1991</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year91" value="1991" /></li>
                                        <li><label className="movie-text" for="year90">1990</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year90" value="1990" /></li>
                                        <li><label className="movie-text" for="year89">1989</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year89" value="1989" /></li>
                                        <li><label className="movie-text" for="year88">1988</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year88" value="1988" /></li>
                                        <li><label className="movie-text" for="year87">1987</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year87" value="1987" /></li>
                                        <li><label className="movie-text" for="year86">1986</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year86" value="1986" /></li>
                                        <li><label className="movie-text" for="year85">1985</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year85" value="1985" /></li>
                                        <li><label className="movie-text" for="year84">1984</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year84" value="1984" /></li>
                                        <li><label className="movie-text" for="year83">1983</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year83" value="1983" /></li>
                                        <li><label className="movie-text" for="year82">1982</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year82" value="1982" /></li>
                                        <li><label className="movie-text" for="year81">1981</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year81" value="1981" /></li>
                                        <li><label className="movie-text" for="year80">1980</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year80" value="1980" /></li>
                                        <li><label className="movie-text" for="year79">1979</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year79" value="1979" /></li>
                                        <li><label className="movie-text" for="year78">1978</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year78" value="1978" /></li>
                                        <li><label className="movie-text" for="year77">1977</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year77" value="1977" /></li>
                                        <li><label className="movie-text" for="year76">1976</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year76" value="1976" /></li>
                                        <li><label className="movie-text" for="year75">1975</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year75" value="1975" /></li>
                                        <li><label className="movie-text" for="year74">1974</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year74" value="1974" /></li>
                                        <li><label className="movie-text" for="year73">1973</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year73" value="1973" /></li>
                                        <li><label className="movie-text" for="year72">1972</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year72" value="1972" /></li>
                                        <li><label className="movie-text" for="year71">1971</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year71" value="1971" /></li>
                                        <li><label className="movie-text" for="year70">1970</label><input className="radio yearlist-yearchk" type="radio" name="year" id="year70" value="1970" /></li>
                                    </ul>
                                </div>
                            </div>

                            <h2 className="a11y-hidden">타입 선택 영역</h2>
                            <div className="chkbox-row">
                                <h2 className="row-title item-title">type</h2>
                                <div className="row-contentBox">
                                    <ul >
                                        <li><label className="movie-text" for="genreall">All</label><input className="radio genrelist-genrechk" type="radio" name="genre" id="genreall" value="all" /></li>
                                        <li><label className="movie-text" for="genremovie">영화</label><input className="radio genrelist-genrechk" type="radio" name="genre" id="genremovie" value="movie" /></li>
                                        <li><label className="movie-text" for="genreseries">시리즈</label><input className="radio genrelist-genrechk" type="radio" name="genre" id="genreseries" value="series" /></li>
                                        <li><label className="movie-text" for="genreepisode">에피소드</label><input className="radio genrelist-genrechk" type="radio" name="genre" id="genreepisode" value="episode" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h2 className="a11y-hidden">검색 결과 영역</h2>
                        <div className="wrapper-itemcontainer">
                            <ul className="itemcontainer-cardlist">
                                {movieResults && movieResults.map((movieResult) => (
                                    <li className="itemcontainer-card">
                                        <a href={`/detail/${movieResult.imdbID}`} className="card-item">
                                            <img className="result-image" src={movieResult.Poster} onerror="this.src='/assets/images/poster-NotAvailable.png'" alt={movieResult.Title} />
                                            <div className="result-informationBox">
                                                <h2 className="informationBox-title movie-title">{movieResult.Title}</h2>
                                                <ul className="informationBox-subList">
                                                    <li className="subList-item"><span className="informationBox-title type-text type-text-movie}">{movieResult.Type}</span></li>
                                                    <li className="subList-item"><span className="informationBox-title movie-year">{movieResult.Year}</span></li>
                                                </ul>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="itemcontainer-btnbox">
                                <button className="itemcontainer-btn" aria-label="더보기 버튼"><span className="btn-click">More Movies</span></button>
                            </div>
                        </div>
                        <div className="wrapper-errormessage"></div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Result;