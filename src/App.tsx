import HomePage from '@/app/home'
import { Route, Switch } from 'wouter'

export default function App () {
  return (
    <Switch>
      <Route path="/" component={HomePage} />

      {/* Default route in a switch */}
      <Route>404: No such page!</Route>
    </Switch>
  )
}
