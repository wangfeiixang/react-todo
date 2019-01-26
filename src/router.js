import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import { Route, Switch, Redirect } from 'react-router-dom'

import About from './components/About.js'
import Home from './components/Home.js'
import Contact from './components/Contact.js'

// class router extends React.Component {
//   render () {
//     return (
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//         <Redirect to="/" />
//       </Switch>
//     )
//   }
// }

const router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about/:id" component={About} />
    <Route sensitive path="/contact" component={Contact} />
    <Route path="/user:username" component={User} />
    <Route
      path="/render/:id"
      render={({ match }) => <div>render组件：{match.params.id}</div>}
    />
    {/* <Redirect to="/" /> */}
  </Switch>
)

function User ({ match }) {
  console.log('User--', match)
  return <h1>Hello---{match.params.username}!</h1>
}

export default router
