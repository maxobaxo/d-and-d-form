export default (state = false, action) => {
  switch (action.type) {
    case 'SHOW_ALIGN_MODAL':
      return true;
    case 'HIDE_ALIGN_MODAL':
      return false;
    default:
      return state;
  }
}
