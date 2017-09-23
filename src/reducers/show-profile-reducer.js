export default (state = false, action) => {
  switch (action.type) {
    case 'SHOW_PROFILE':
      return true;
    default:
      return state;
  };
}
