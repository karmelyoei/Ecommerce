import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shopepage.component'
import { Switch, Route} from 'react-router-dom'
import Header from './components/header/header.component'

import SignInAndSignUp from './pages/sign-in-and-sgin-up/sign-in-and-sgin-up.page.jsx'

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/signin' component={SignInAndSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
