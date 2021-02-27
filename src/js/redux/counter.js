// types
const inc = "inc";
const dec = "dec";
const set = "set";

// initialstate
const initialState = {
  counter: 68,
};

// actioncreators
export const increment = () => ({
  type: inc,
});
export const decrement = () => ({
  type: dec,
});
export const setValue = (e) => ({
  type: set,
  payload: e,
});

//reducer
const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case inc:
      return { ...state, counter: state.counter + 1 };
    case dec:
      return { ...state, counter: state.counter - 1 };
    case set:
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};

export default counterReducer;
