import { fromJS } from "immutable";
import * as Types from "./type";

const defaultState = fromJS({
  list: ["A", "B"]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case Types.Init_List: {
      return state.set("list", fromJS(action.list));
    }
    default: {
      return state;
    }
  }
};
