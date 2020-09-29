import * as actions from './actions';
import listItemData from '../../../data-for-testing';

describe('actions', () => {
  it('should dispatch an requets for getting the data', () => {
    const payload = { id : 1}
    const expectedAction = {
      type: 'FETCH_SPACE_X_DATA_REQUEST',
      payload:payload,
    };
    expect(actions.fetchSpaceXDataRequest(payload)).toEqual(expectedAction);
  });

  it('should dispatch an success fn for getting the data', () => {
    const payload = {libraryData: listItemData, key: 0 }
   const expectedAction = {
      type: 'FETCH_SPACE_X_DATA_SUCCESS',
      payload:payload,
    };
    expect(actions.fetchSpaceXDataRequest(payload)).toEqual(expectedAction);
  });
});