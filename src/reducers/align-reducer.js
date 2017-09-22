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
      })

      // const { id, race, class, strength, dexterity, constitution, intellect, wisdom, charisma } = action;
      return updatedState;


      // for (var i; i < state.length - 1; i++) {
      //   if (state[i].id === action.id) {
      //     state[i].classs = classs,
      //     state[i].race = race,
      //     state[i].strength = strength,
      //     state[i].dexterity = dexterity,
      //     state[i].constitution = constitution,
      //     state[i].intellect = intellect,
      //     state[i].wisdom = wisdom,
      //     state[i].charisma = charisma
      //   }
      // };
      return state;
    default:
      return state;
  }
};
