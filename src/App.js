// import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import SwipeCards from './component/SwipeCards'
import SwipteButtons from './component/SwipeButtons'
import Chats from './component/Chats'
import Profile from './component/Profile'

const App= ()=> {
  // const props = {backButton: '/', backButtonProfile: '/'}
  return (
    <div className="App">

      <Router>
  
        <Switch>
        <Route path='/profile'>
          <Header backButtonProfile='/'/>
            <Profile/>
          </Route>
        <Route path='/chat'>
            <Header backButton='/'/>
            <Chats/>
          </Route>
          <Route path='/'>
          <Header/>
            <SwipeCards/>
            <SwipteButtons/>
          </Route>

        </Switch>
      </Router>
      {/* Header */}
      {/* Tinder Cards */}
      {/* Buttons below tinder cards */}

      {/* Chat screen */}
      {/* individual chat screens */}
    </div>
  );
}

export default App;
