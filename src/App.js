import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Reporting from './components/Reporting';
import Api from './components/Api';
import Algo from './components/Algo';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <main className="app_main">
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/reporting" component={Reporting}></Route>
          <Route exact path="/api" component={Api}></Route>
          <Route exact path="/algo" component={Algo}></Route>
        </main>
      </Router>
    </div>
  );
}

export default App;
