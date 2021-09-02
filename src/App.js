import Movies from './Components/Movies';
import Home from './Components/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
  <Router>
    
    <Switch> 
    <Route path='/' exact component={Home}/>
    <Route path='/movies' component={Movies}/>
    {/* <Route path='/about' component={About} isAuth={true} />
    <Route path='/about' render={(props)=>(
      <About {...props} isAuth={true}/>
    )}/> */}
  </Switch>
  </Router>
  );
}

export default App;
