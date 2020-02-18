import config from '../../config';

const { apiKey } = config;

export function searchTextChange(searchedText) {
  return {
    type: 'SEARCH_TERM_CHANGE',
    value: searchedText,
  };
}

export function search(searchedText) {
  return (dispatch) => {
    dispatch({ type: 'SEARCH_REQUEST' });
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=${encodeURIComponent(searchedText)}`;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        if (json.Response === 'False') {
          throw json.Error;
        }
        const results = json.Search;
        dispatch({ type: 'SEARCH_REQUEST_SUCCESS', results });
      })
      .catch(err => {
        const errorMessage = (err instanceof Error ? err.message : String(err));
        dispatch({ type: 'SEARCH_REQUEST_FAILURE', errorMessage });
      });
  };
}
