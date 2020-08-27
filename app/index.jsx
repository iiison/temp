import React             from 'react'
import ReactDOM          from 'react-dom'
import { StoreContext }  from 'redux-react-hook'
import { BrowserRouter } from 'react-router-dom'

import store  from '$CONFIGS/store'
import routes from '$CONFIGS/routes'

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <BrowserRouter>
      {routes()}
    </BrowserRouter>
  </StoreContext.Provider>, document.getElementById('root')
)

