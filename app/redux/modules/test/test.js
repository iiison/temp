// import { get } from '$UTILS/requestHandler'
// import errorTypeDetailMap from '$CONFIG/errorTypeDetailMap'

export const GET_USER = 'GET_USER'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'GET_USER_FAILURE'

export function getUser() {
  return {
    type : GET_USER
  }
}

export function getUserFailure(error = '') {
  return {
    type  : GET_USER_FAILURE,
    error
  }
}

export function getUserSuccess(response) {
  return {
    type : GET_USER_SUCCESS,
    response
  }
}

// Async Action Creators Starts
export function fetchUser() {
  return async (dispatch) => {
    dispatch(getUser())

    try {
      // const response = await get({
      //   path    : 'some/path',
      //   payload : {},
      //   dispatch
      // })

      const body = await fetch('https://backendapi.turing.com/departments')
      const response = await body.json()

      dispatch(getUserSuccess(response))
    } catch (error){
      dispatch(getUserFailure(error.message))

      throw error.message
    }
  }
}
// Async Action Creators Ends

export const initialState = {
  isFetching : false,
  isAuthed   : false,
  error      : ''
}

export default function test(state = initialState, action) {
  const options = {
    GET_USER : () => ({
      ...state,
      isFetching : true
    }),
    GET_USER_FAILURE : () => ({
      ...state,
      isFetching : false,
      error      : action.error
    }),
    GET_USER_SUCCESS : () => ({
      ...state,
      isFetching : false,
      error      : '',
      userInfo   : action.response
    })
  }

  return (action.type && options[action.type]) ? options[action.type]() : state
}

