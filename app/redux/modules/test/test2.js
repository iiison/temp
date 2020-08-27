// import { get } from '$UTILS/requestHandler'
// import errorTypeDetailMap from '$CONFIG/errorTypeDetailMap'

export const GET_EMPLOYEE = 'GET_EMPLOYEE'
export const GET_EMPLOYEE_SUCCESS = 'GET_EMPLOYEE_SUCCESS'
export const GET_EMPLOYEE_FAILURE = 'GET_EMPLOYEE_FAILURE'

export function getEmployee() {
  return {
    type : GET_EMPLOYEE
  }
}

export function getEmployeeFailure(error = '') {
  return {
    type  : GET_EMPLOYEE_FAILURE,
    error
  }
}

export function getEmployeeSuccess(response) {
  return {
    type : GET_EMPLOYEE_SUCCESS,
    response
  }
}

// Async Action Creators Starts
export function fetchEmployee() {
  return async (dispatch) => {
    dispatch(getEmployee())

    try {
      // const response = await get({
      //   path    : 'some/path',
      //   payload : {},
      //   dispatch
      // })

      const body = await fetch('https://backendapi.turing.com/departments')
      const response = await body.json()

      dispatch(getEmployeeSuccess(response))
    } catch (error){
      dispatch(getEmployeeFailure(error.message))

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

export default function employee(state = initialState, action) {
  const options = {
    GET_EMPLOYEE : () => ({
      ...state,
      isFetching : true
    }),
    GET_EMPLOYEE_FAILURE : () => ({
      ...state,
      isFetching : false,
      error      : action.error
    }),
    GET_EMPLOYEE_SUCCESS : () => ({
      ...state,
      isFetching : false,
      error      : '',
      response   : action.response
    })
  }

  return (action.type && options[action.type]) ? options[action.type]() : state
}

