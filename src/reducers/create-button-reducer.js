export default (state = false, action) => {
  switch (action.type) {
    case 'HIDE_CREATE_BUTTON':
      return true;
    default:
      return state;
  }
}
