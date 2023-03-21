let initialState = [];

export function requisitionReducer(state = initialState, action) {
    switch (action.type) {
      case "SET_REQUISITION":
        return action.payload;
      default:
        return state;
    }
  }