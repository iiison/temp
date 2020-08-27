/* eslint-disable */
import React, { useCallback, useContext, useEffect } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'

function useDispatchableAction ( action, dependencies ) {
  const dispatch = useDispatch()
  const actionCreator = useCallback(() => dispatch(action()), dependencies)

  return actionCreator
}

export function useDispatchableActions (actions, dependencies = []) {
  return actions.reduce((prev, { action, dependencies = [] }) => ({
    ...prev,
    [`${action.name}Action`] : useDispatchableAction(action, dependencies)
  }), {})
  // return actions.map(({ action, dependencies = [] }) => useDispatchableAction(action, dependencies))
}

function useStore (fieldName) {
  const mapState = useCallback((state) => ({ [fieldName] : state[fieldName] }), [])
  const value = useMappedState(mapState)

  return value
}

export function useStoreValues (stateFields) {
  return stateFields.reduce((prev, fieldName) => {

    return {
      ...prev,
        [fieldName] : useStore(fieldName)[fieldName]
    } 
  }, {})
}


