import config from '../../config';

const { apiKey } = config;

export function fetchDetails(id) {
  return (dispatch) => {
    dispatch({ type: 'DETAILS_REQUEST', id });
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${encodeURIComponent(id)}&type=movie&plot=full`;
    console.log('DETAIL URL', url);
    fetch(url)
      .then(response => response.json())
      .then(json => {
        if (json.Response === 'False') {
          throw json.Error;
        }
        const result = json;
        dispatch({ type: 'DETAILS_REQUEST_SUCCESS', id, result });
      })
      .catch(err => {
        const errorMessage = (err instanceof Error ? err.message : String(err));
        dispatch({ type: 'DETAILS_REQUEST_FAILURE', id, errorMessage });
      });
  };
}
