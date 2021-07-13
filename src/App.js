import React from 'react';
import Header from './Header';
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chat from './Chat';
import ChatScreen from './ChatScreen';

const App=()=>{
  return (
    <div>
      <Router>
       <Switch>
          <Route exact path='/chat/:person'>
            <Header backButton="/chat"/>
            <ChatScreen/>
          </Route>
         <Route exact path='/'>
            <Header />
            <TinderCards/>
            <SwipeButtons/>
          </Route>
          <Route exact path='/chat'>
            <Header backButton="/"/>
            <Chat/>
          </Route>

        </Switch>
        

      </Router>
      
    </div>

  )
};
export default App