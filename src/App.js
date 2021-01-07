import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import {Navbar} from "./components/Navbar";
import {Home} from "./components/pages/Home";
import {Services} from "./components/pages/Services";
import {Products} from "./components/pages/Products";
import {SingUp} from "./components/pages/SingUp";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/services" exact component={Services}/>
        <Route path="/products" exact component={Products}/>
        <Route path="/sing-up" exact component={SingUp}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
