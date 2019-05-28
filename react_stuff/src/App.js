import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/header/Header'
import Main from './components/main/Main'
import SinglePost from './components/post/SinglePost'
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Router>
          <Route exact path='/post/:id' component={SinglePost}/> 
          <Route exact path='/' component={Main}/>
        </Router>
      
    </div>
  );
}

export default App