export function drawerAdminReducer(state = false, action) {
    switch (action.type) {
      case "SET_VISIBLE_ADMIN":
        return action.payload;
      default:
        return state;
    }
  }