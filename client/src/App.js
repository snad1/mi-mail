import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./services/routes";
import './App.css'

function App() {
  return (
    <Router>
        <Switch>
            {routes.map((item,i)=>
                <Route key={i} path={item.path} exact={item.exact}>
                    <item.layout>
                        <item.component/>
                    </item.layout>
                </Route>
            )}

        </Switch>
    </Router>
  );
}

export default App;
