import SpaceXActionsReducer from './reducer';
import { SpaceXActions } from './actions';

const initialState = {
  loading: true,
  SpaceXHistory :[]
};

describe('SpaceXActionsReducer reducer', () => {
 
  it('returns the initial state', () => {
    expect(SpaceXActionsReducer(undefined, {})).toEqual({
      loading: true,
      SpaceXHistory: [],
 
    });
  });

  it('should return the initial state', () => {
    expect(SpaceXActionsReducer(initialState, { type: SpaceXActions.FETCH_SPACE_X_HISTORY_REQUEST})).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should return the updated data state', () => {
    expect(SpaceXActionsReducer(initialState,{
        type: SpaceXActions.FETCH_SPACE_X_HISTORY_SUCCESS,
     })).toEqual({
      loading: false,
      SpaceXHistory :[]
    });
  });

  it('handles failure', () => {
    expect(SpaceXActionsReducer(initialState, { type: SpaceXActions.FETCH_SPACE_X_HISTORY_ERROR  })).toEqual({
      ...initialState,
      loading: true,
      errors: '',
    });
  });
  
});

