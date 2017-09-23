export default (state = true, action) => {
  switch (action.type) {
    case 'SHOW_PROFILE':
      return false;
    default:
      return state;
  };
}
