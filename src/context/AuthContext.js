import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };

    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: " Something went wrong with signup",
      });
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // try sign in
    // handle success updating state
    // handle failure by showing error message
  };
};

const signout = (dispatch) => {
  return ({ email, password }) => {
    // signout somehow
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSigned: true, errorMessage: "" }
);
