import React from 'react'; 
import Header from './Header';
import Sidebar from './Sidebar'; 
import RecommendedVideos from './RecommendedVideos';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    //BEM class naming convention
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <h1>Search page</h1>
          </Route>
          <Route path="/">
            <div className="app_page">
               <Sidebar />
              <RecommendedVideos />
              </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
