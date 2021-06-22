import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';

import WelcomePage from '../Welcome/WelcomePage';
import FeelingPage from '../Feeling/FeelingPage';
import UnderstandingPage from '../Understanding/UnderstandingPage';
import SupportPage from '../Support/SupportPage';
import CommentsPage from '../Comments/CommentsPage';
import ReviewPage from '../Review/ReviewPage';
import ThankYouPage from '../ThankYou/ThankYouPage';
import Admin from '../Admin/Admin';

import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from 'react-router-dom';

function App() {
  // grabbed entire store and saved it to reduxStore
  const reduxStore = useSelector(store => store);
  console.log(reduxStore);

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4 className='App-subtitle'>Don't forget it!</h4>
        </header>
        {/* I wanted to see the info on the DOM */}
        {/* JSON.stringify(reduxStore) */}
        
        {/* Digging in to see the information. Probably great to use for the review page */}
        {/* <p>Your Feeling is: {reduxStore.feelingReducer}</p>
        <p>Your Understanding is: {reduxStore.understandingReducer}</p>
        <p>Your Support is: {reduxStore.supportReducer}</p>
        <p>Your Comments are: {reduxStore.commentsReducer}</p> */}
      </div>

      <Switch>
        <Route path='/feeling'>
          <FeelingPage />
        </Route>
        <Route path='/understanding'>
          <UnderstandingPage />
        </Route>
        <Route path='/support'>
          <SupportPage />
        </Route>
        <Route path='/comments'>
          <CommentsPage />
        </Route>
        <Route path='/review'>
          <ReviewPage />
        </Route>
        <Route path='/thanks'>
          <ThankYouPage />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
        <Route path='/'>
          <WelcomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;