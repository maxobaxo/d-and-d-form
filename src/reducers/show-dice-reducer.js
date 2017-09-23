export default (state = true, action) => {
  switch (action.type) {
    case 'SHOW_DICE':
      return false;
    default:
      return state;
  }
}
