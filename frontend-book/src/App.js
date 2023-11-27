import {BrowserRouter as Router ,Route, Switch } from 'react-router-dom'

import Login from './components/Login'

import Home from './components/Home'

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
)

export default App
