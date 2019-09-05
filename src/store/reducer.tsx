const defaultState = {
  userName: "bb"
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_USERNAME": {
      let newState = JSON.parse(JSON.stringify(state));
      newState.userName = action.name;
      return newState;
    }
    default: {
      return state;
    }
  }
};
