export default (state = [], action) => {
  switch (action.type) {
    case 'ALIGN':
      const { id, name, morals, views } = action;
      let alignment = views + ' ' + morals;
      if (alignment === 'neutral neutral') {
        alignment = 'true neutral';
      }
      return [
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
