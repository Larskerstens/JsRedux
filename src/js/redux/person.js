// types
const NAME = "setname";
const AGE = "setage";

// initialstate
const initialState = {
  name: "Imke",
  age: 20,
};

// actioncreators
export const setName = (e) => ({
  type: NAME,
  payload: e,
});
export const setAge = (e) => ({
  type: AGE,
  payload: e,
});

//reducer
const persoonReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case NAME:
      return { ...state, name: payload };
    case AGE:
      return { ...state, age: payload };
    default:
      return state;
  }
};

export default persoonReducer;
