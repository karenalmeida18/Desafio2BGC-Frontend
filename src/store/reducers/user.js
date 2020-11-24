const INITIAL_STATE = {
  sub: null,
  email: null,
}

export default function user(state = INITIAL_STATE, action) {
  console.log(state);
  switch (action.type) {
    case 'SET_LOGIN':
      return action.data;
    case 'LOGOUT':
      return INITIAL_STATE;
    default:
      return state;
  }
}
