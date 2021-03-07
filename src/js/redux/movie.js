import axios from "axios";

const initialState = {
  movies: [],
  movie: "",
  loading: false,
  error: false,
};

const MOVIE_FETCH_START = "MOVIE_FETCH_START";
const MOVIE_FETCH_SUCCES = "MOVIE_FETCH_SUCCES";
const MOVIE_FETCH_FAIL = "MOVIE_FETCH_FAIL";

export const movieFetchStart = (e) => ({
  type: MOVIE_FETCH_START,
  payload: e,
});
export const movieFetchSucces = (e) => ({
  type: MOVIE_FETCH_SUCCES,
  payload: e,
});
export const movieFetchFail = () => ({
  type: MOVIE_FETCH_FAIL,
});

export const getMovie = (e) => async (dispatch, getState) => {
  dispatch(movieFetchStart(e));
  try {
    const response = await axios(
      `https://api.themoviedb.org/3/search/movie?api_key=4137459ac0c465a0b4ea2270465f111a&language=en-US&query=${
        getState().movieState.movie
      }&page=1&include_adult=false`
    );
    dispatch(movieFetchSucces(response.data.results));
  } catch (error) {
    dispatch(movieFetchFail());
  }
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MOVIE_FETCH_START:
      return { ...state, movie: payload, loading: true, error: false };
    case MOVIE_FETCH_SUCCES:
      return { ...state, movies: payload, loading: false, error: false };
    case MOVIE_FETCH_FAIL:
      return { ...state, movies: payload, loading: false, error: true };
    default:
      return state;
  }
};

export default movieReducer;
