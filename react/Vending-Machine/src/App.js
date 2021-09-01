import logo from './logo.svg'
import './App.css'
import VendingMachine from './components/VendingMachine'
import { Route, Switch } from 'react-router-dom'

import Soda from './components/Soda'
import Sardines from './components/Sardines'
import Chips from './components/Chips'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <VendingMachine />} />
        <Route exact path="/soda" render={() => <Soda />} />
        <Route exact path="/sardines" render={() => <Sardines />} />
        <Route exact path="/chips" render={() => <Chips />} />
      </Switch>
    </div>
  )
}

export default App
