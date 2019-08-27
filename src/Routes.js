import React from 'react'
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom'
import { Home, Models, Edit, View, Create } from './views'
import Layout from './components/Layout'


const LayoutWithHistory = withRouter(Layout)



const withLayout = Component => props => {

  
  const items=[
    {
      label: "Home",
      pathname: "/",
    },
    {
      label: "Models",
      pathname: "/Models"
    },
  ]

  return (
    <LayoutWithHistory 
      activeTab={items.findIndex(item => item.pathname === props.location.pathname)} 
      items={items}
    >
      <Component {...props} />
    </LayoutWithHistory>
  )
}


export default () => (
  <HashRouter>
    <Switch>
      <Route path="/models/:id/edit" render={withLayout(Edit)} />
      <Route path="/models/create" render={withLayout(Create)} />
      <Route path="/models/:id" render={withLayout(View)} />
      <Route path="/models" render={withLayout(Models)} />
      <Route path="/" render={withLayout(Home)} />
    </Switch>
  </HashRouter>
)