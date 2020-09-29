import { SpaceXActions } from './actions';
import utils from '../../utils/index'

const initialState = {
  loading: true,
  SpaceXHistory:[],
  SpaceXPayload:[],
  errors: false  
};

const SpaceXActionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SpaceXActions.FETCH_SPACE_X_HISTORY_REQUEST: {
      return { ...state };
    }

    case SpaceXActions.FETCH_SPACE_X_HISTORY_SUCCESS: {
      let data = Object.assign([], action.payload);
      !!data && data.forEach((element, index) => {
        element.key = index;
        element.detailsBrief = utils.limitText(element.details, 50);
        element.createdAt = utils.getDateFormatted(element.event_date_utc);
      });
      state.loading = false;
      state.SpaceXHistory = data;
      return state;
    }


    case SpaceXActions.FETCH_SPACE_X_PAYLOAD_REQUEST: {
      return { ...state };
    }

    case SpaceXActions.FETCH_SPACE_X_PAYLOAD_SUCCESS: {
      let data = Object.assign([], action.payload);
      !!data && data.forEach((element, index) => {
        element.key = index;
      });
      state.loading = false;
      state.SpaceXPayload = data;
      return state;
    }

    case SpaceXActions.FETCH_SPACE_X_HISTORY_ERROR:
    case SpaceXActions.FETCH_SPACE_X_PAYLOAD_ERROR:
      {
        return {
          ...state,
          loading: true,
          errors:  action.payload
        };
      }
    default:
      return state;
  }
};

export default SpaceXActionsReducer;
