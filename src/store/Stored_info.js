export const login = () => ({
  type: "LOGIN",
});
export const logout = () => ({
  type: "LOGOUT",
});

const loginUser = {
  isLoggedIn: false,
};

const reducer = (state = loginUser, action) => {
  switch (action.type) {
    case "LOGIN":
      return { isLoggedIn: !state.isLoggedIn };
    case "LOGOUT":
      return { isLoggedIn: !state.isLoggedIn };
    default:
      return { state };
  }
};

export default reducer;
