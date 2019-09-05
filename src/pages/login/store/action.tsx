import * as Types from "./type";

export const changeUserName = name => ({
  type: Types.CHANGE_USERNAME,
  name
});
