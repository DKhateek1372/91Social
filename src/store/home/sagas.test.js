import {  put } from 'redux-saga/effects';
import { SpaceXActions } from './actions';

it('should fail if not authenticated', () => {
    const gen = SpaceXActions.fetchSpaceXHistoryRequest();
  
    expect(gen.next().value).toEqual((SpaceXActions.fetchSpaceXHistorySuccess()));
    expect(gen.next(false).value).toEqual(put(SpaceXActions.fetchSpaceXHistoryError()));
    expect(gen.next().done).toBeTruthy();
  });