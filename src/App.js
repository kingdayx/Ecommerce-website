import Homepage from './components/pages/homepage/homepage.component'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './components/pages/shop/shop.component'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
