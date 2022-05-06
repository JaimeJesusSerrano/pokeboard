import React, { lazy } from 'react'

import { Route, Routes } from 'react-router-dom'

const PageNotFound = lazy(() => import(/* webpackChunkName: "PageNotFound" */ 'components/pages/page-not-found'))
import routes, { IRoute } from 'config/routes'

const RouterSwitch = (): JSX.Element => {
  return (
    <Routes>
      {Object.values(routes).map(({ Component, path }: IRoute) => (
        <Route element={<Component />} key={path} path={path} />
      ))}
      <Route element={<PageNotFound />} path='*' />
    </Routes>
  )
}

export default RouterSwitch
