import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Balance from "./components/Balance";
import Blocks from "./components/Blocks"

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="Nav">
          <ul>
            <li>
              <NavLink exact to="/"activeClassName="ActiveLink">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/balance" activeClassName="ActiveLink">
                Check wallet balance
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/" component={Blocks} />
        <Route exact path="/balance" component={Balance} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
