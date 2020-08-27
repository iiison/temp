/* eslint-disable */
import React, { useCallback, useContext, useEffect } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { Link } from 'react-router-dom'

import { useDispatchableActions, useStoreValues } from '$RUTILS/reduxReactUtils'
import * as testAcation from '$RMODULES/test/test'
import * as empAcation from '$RMODULES/test/test2'

export default function Test(id) {
  const { fetchUser, getUser } = testAcation
  const { fetchEmployee, getEmployee } = empAcation

  const state = useStoreValues(['test', 'employee'])
  const { test } = state

  const { fetchUserAction, getUserAction, getEmployeeAction, fetchEmployeeAction } = useDispatchableActions([
  // const val = useDispatchableActions([
    {
      action : fetchUser
    },
    {
      action : getUser
    },
    {
      action : getEmployee
    },
    {
      action : fetchEmployee
    }
  ])

  useEffect(() => {
    fetchUserAction()
    fetchEmployeeAction()
    // fetchUserAction()
  }, [])

  return (
    <>
      <div>{'some data'}</div>
      <Link to={`/test-2`}>{'Go to next page'}</Link>
    </>
  )
}

