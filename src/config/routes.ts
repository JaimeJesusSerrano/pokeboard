import { lazy, LazyExoticComponent } from 'react'

const PageNotFound = lazy(() => import(/* webpackChunkName: "PageNotFound" */ 'components/pages/page-not-found'))
const Pokeboard = lazy(() => import(/* webpackChunkName: "Pokeboard" */ 'components/pages/pokeboard'))
const Pokemon = lazy(() => import(/* webpackChunkName: "Pokemon" */ 'components/pages/pokemon'))

type JSXComponent = () => JSX.Element

export interface IRoutes {
  [key: string]: IRoute
}

export interface IRoute {
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
  path: string
}

const routes: IRoutes = {
  home: {
    Component: Pokeboard,
    name: 'home',
    path: '/',
  },
  pageNotFound: {
    Component: PageNotFound,
    name: 'Page not found',
    path: '/page-not-found',
  },
  pokemon: {
    Component: Pokemon,
    name: 'Pokemon',
    path: '/pokemon',
  },
}

export default routes
