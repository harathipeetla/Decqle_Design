import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LogIn from './components/LogIn'
import Home from './components/Home'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LogIn} />
      <Route path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default App
