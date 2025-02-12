import { useEffect, useState } from "react";
import API from "../keys/api";
import { useDispatch, useSelector } from "react-redux";
import { getMainMovie } from "../contexts/slices/getMainMovieSlice";
import { getMainImdbId } from "../contexts/slices/getMainImdbIdSlice";

export function useMainMovies() {
    const [movies, setMovies] = useState([]);
    const [imdbIDs, setImdbIDs] = useState({});

    // const dispatch = useDispatch();
    // const { movies, status1, error1 } = useSelector((state) => state.getMainMovies);
    // const { imdbIDs, status2, error2 } = useSelector((state) => state.ids);

    useEffect(() => {
        async function getMovies() {
            try {
                const response = await fetch(`${API.TMDB_URL}now_playing?api_key=${API.TMDB_API_KEY}`);
                const data = await response.json();
                const movieDatas = data.results;
                setMovies(movieDatas);

                // dispatch(getMainMovie());

                // movies.forEach((movie) => {
                //     dispatch(getMainImdbId(movie.id))
                // });

                // movieDatas에는 총 20개의 트렌드한 영화가 있다. --> 이 20개의 영화는 TMDBID를 가지고 있어 상세페이지를 가기 위해서는 OMDBID를 필요로 하기 때문에
                // getIMDBID 함수를 만들어 20개의 배열의 반복문을 실행한다. 
                movieDatas.forEach((movieData) => {
                    getIMDBID(movieData.id);
                });
            } catch (error) {
                console.error("getMovies: ", error);
            }
        };

        async function getIMDBID(movieId) {
            try {
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
            } catch (error) {
                console.error("getIMDBID: ", error);
            }
        };

        getMovies();
    }, []);

    // if (status1 === 'loading') return <div>로딩 중...</div>;
    // if (status1 === 'failed') return <div>{error1}</div>;
    // if (status2 === 'loading') return <div>로딩 중...</div>;
    // if (status2 === 'failed') return <div>{error2}</div>;

    return { movies, imdbIDs };
}