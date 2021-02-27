import { v4 as uuid } from "uuid";

// types
const add = "add";
const remove = "remove";

// initialstate
const initialState = {
  vrienden: [
    {
      id: uuid(),
      name: "Imke",
    },
    {
      id: uuid(),
      name: "Hichi",
    },
    {
      id: uuid(),
      name: "Lara",
    },
    {
      id: uuid(),
      name: "Freddy",
    },
  ],
};

// actioncreators
export const ADD = (e) => ({
  type: add,
  payload: e,
});
export const REMOVE = (e) => ({
  type: remove,
  payload: e,
});

//reducer
const vriendenReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case add:
      return {
        ...state,
        vrienden: [
          ...state.vrienden,
          {
            id: uuid(),
            name: payload,
          },
        ],
      };
    case remove:
      return {
        ...state,
        vrienden: [...state.vrienden.filter((e) => e.id != payload)],
      };
    default:
      return state;
  }
};

export default vriendenReducer;
