import alignReducer from './../../src/reducers/align-reducer';
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

  

});
