export default (state = [], action) => {
  switch (action.type) {
    case 'ALIGN':
      const { id, name, alignment } = action;
      return [
        ...state,
        {
          id: id,
          name: name,
          alignment: alignment
        }
      ]
    default:
      return state;
  }
};
