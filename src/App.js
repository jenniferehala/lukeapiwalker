import './App.css';
import Search from './views/Search';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import People from './views/People';
import Planet from './views/Planet';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Search />
          <Switch>

            <Route path='/people/:id'>
              <People />

            </Route>
            <Route path='/planets/:id'>
              <Planet />
            </Route>

          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
