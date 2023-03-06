import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import TvShow from "./pages/TvShow";

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/tvshow">
          <TvShow />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path={["/", "/movies/:movieId"]}>
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
