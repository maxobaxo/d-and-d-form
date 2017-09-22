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
      ];
    case 'FINALIZE_CHARACTER':
      const updatedState = state.filter(character => character.id === action.id);
      updatedState.forEach((character) => {
        character.class = action.class;
        character.race = action.race;
        character.strength = action.strength;
        character.dexterity = action.dexterity;
        character.constitution = action.constitution;
        character.intellect = action.intellect;
        character.wisdom = action.wisdom;
        character.charisma = action.charisma;
      });
      return updatedState;
    default:
      return state;
  }
};
