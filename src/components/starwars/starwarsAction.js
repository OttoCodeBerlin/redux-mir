import axios from 'axios'

export const getStarwarsData = () => dispatch => {
  axios.get('https://swapi.co/api/people').then(res =>
    dispatch({
      // type = name of the "action"
      type: 'GET_STARWARS',
      payload: res.data
    })
  )
}
