const initialState = {
  starwarsData: []
}

export const starwarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_STARWARS':
      return {
        ...state,
        starwarsData: action.payload
      }
    default:
      return state
  }
}
