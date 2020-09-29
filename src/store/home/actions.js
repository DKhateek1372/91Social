export const SpaceXActions = {

    FETCH_SPACE_X_HISTORY_REQUEST: 'FETCH_SPACE_X_HISTORY_REQUEST',
    FETCH_SPACE_X_HISTORY_SUCCESS: 'FETCH_SPACE_X_HISTORY_SUCCESS',
    FETCH_SPACE_X_HISTORY_ERROR: 'FETCH_SPACE_X_HISTORY_ERROR',

    fetchSpaceXHistoryRequest: params => ({
        type: SpaceXActions.FETCH_SPACE_X_HISTORY_REQUEST,
        payload: params
    }),

    fetchSpaceXHistorySuccess: data => ({
        type: SpaceXActions.FETCH_SPACE_X_HISTORY_SUCCESS,
        payload: data
    }),

    fetchSpaceXHistoryError: message => ({
        type: SpaceXActions.FETCH_SPACE_X_HISTORY_ERROR,
        payload: message
    }),


    FETCH_SPACE_X_PAYLOAD_REQUEST: 'FETCH_SPACE_X_PAYLOAD_REQUEST',
    FETCH_SPACE_X_PAYLOAD_SUCCESS: 'FETCH_SPACE_X_PAYLOAD_SUCCESS',
    FETCH_SPACE_X_PAYLOAD_ERROR: 'FETCH_SPACE_X_PAYLOAD_ERROR',

    fetchSpaceXPayloadRequest: params => ({
        type: SpaceXActions.FETCH_SPACE_X_PAYLOAD_REQUEST,
        payload: params
    }),

    fetchSpaceXPayloadSuccess: PAYLOAD => ({
        type: SpaceXActions.FETCH_SPACE_X_PAYLOAD_SUCCESS,
        payload: PAYLOAD
    }),

    fetchSpaceXPayloadError: message => ({
        type: SpaceXActions.FETCH_SPACE_X_PAYLOAD_ERROR,
        payload: message
    }),

};







