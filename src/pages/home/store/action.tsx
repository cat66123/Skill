import * as Types from "./type";
import axios from "axios";

export const initList = list => ({
  type: Types.Init_List,
  list
});

export const getList = () => {
  return dispatch => {
    axios
      .get("/api/wordList.json")
      .then(res => {
        if (
          res.data.success &&
          Array.isArray(res.data.data) &&
          res.data.data.length > 0
        ) {
          dispatch(initList(res.data.data));
        }
        console.log(res);
      })
      .catch(() => {
        console.log("err");
      });
  };
};
