export default function searchReducer(state = {text: "Hi Search*"}, action) {
  switch (action.type) {
    case "SEARCH_QUERY":
      return {...state, ...action.payload};

    default:
      return state;
  }
}
