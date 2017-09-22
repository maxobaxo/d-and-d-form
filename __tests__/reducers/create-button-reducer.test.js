import createButtonReducer from './../../src/reducers/create-button-reducer';
import c from './../../src/constants';

test('should hide create Button when it is clicked', () => {
  expect(createButtonReducer(false, { type: c.HIDE_CREATE_BUTTON})).toEqual(true);
});
