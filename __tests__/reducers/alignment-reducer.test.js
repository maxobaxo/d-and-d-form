import alignReducer from './../../src/reducers/align-reducer';
import alignModalReducer from './../../src/reducers/align-modal-reducer';
import c from './../../src/constants';

describe('Character Alignment Reducer', () => {
  let action;
  const characterInfo = {
    name: 'Eddie Pepitone',
    alignment: 'Chaotic Good',
    id: 0
  };

  test('should return equivalent state if no action type is recognized', () => {
    expect(alignReducer([], { type: null})).toEqual([]);
  });

  test('should add character to list array', () => {
    const { name, alignment, id } = characterInfo;
    action = {
      type: c.ALIGN,
      name: name,
      alignment: alignment,
      id: id
    };
    expect(alignReducer([], action)).toEqual([ characterInfo ]);
  });

  test('should show modal when button is clicked', () => {
    expect(alignModalReducer(false, { type: c.SHOW_ALIGN_MODAL})).toEqual(true);
  });

});
