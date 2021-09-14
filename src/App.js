import './App.css';
import Header from './Header';
import Page1 from './Page1';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Service from './Service'
import Contact from './Contact';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Page1} />
        <Route exact path="/Page1" component={Page1} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Skills" component={Skills} />
        <Route exact path="/Service" component={Service} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact} />  
      </Switch>
    </Router>
    </>
  );
}

export default App;
