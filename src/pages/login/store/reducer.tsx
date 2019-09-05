import { fromJS } from "immutable";
import * as Types from "./type";

const defaultState = fromJS({
  userName: "bbcc"
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case Types.CHANGE_USERNAME: {
      return state.set("userName", action.name);
    }
    default: {
      return state;
    }
  }
};
