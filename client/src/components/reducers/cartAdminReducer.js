let initialState = [];

if (typeof window !== "undefined") {
  if (localStorage.getItem("cartAdmin")) {
    initialState = JSON.parse(localStorage.getItem("cartAdmin"));
  } else {
    initialState = [];
  }
}

export function cartAdminReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return action.payload;
    default:
      return state;
  }
}


